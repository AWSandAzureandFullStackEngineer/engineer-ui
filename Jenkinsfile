pipeline {
    agent any

        notifySlack(String buildStatus = 'STARTED') {
            // Build status of null means success.
            buildStatus = buildStatus ?: 'SUCCESS'

            def color

            if (buildStatus == 'STARTED') {
                color = '#D4DADF'
            } else if (buildStatus == 'SUCCESS') {
                color = '#BDFFC3'
            } else if (buildStatus == 'UNSTABLE') {
                color = '#FFFE89'
            } else {
                color = '#FF9FA1'
            }

            def msg = "${buildStatus}: `${env.JOB_NAME}` #${env.BUILD_NUMBER}:\n${env.BUILD_URL}"

            slackSend(color: color, message: msg)
        }

       stage 'Build'

        stages {
            stage('SonarQube analysis') {
                environment {
                    scannerHome = tool 'sonar-scanner'
                }
                steps   {
                    withSonarQubeEnv('sonarqube-server') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
            stage("Docker Build and Push") {
                steps {
                    sh ' docker buildx build --push --platform linux/amd64 --tag steven8519/engineer-ui:latest .'
                }
            }
            stage('K8S Deploy') {
                steps {
                    script {
                        withKubeConfig([credentialsId: 'K8S', serverUrl: '']) {
                            sh ('kubectl apply -f deployment.yaml')
                        }
                    }
                }
            }
            stage('K8S Service') {
                steps {
                    script {
                        withKubeConfig([credentialsId: 'K8S', serverUrl: '']) {
                            sh ('kubectl apply -f service.yaml')
                        }
                    }
                }
            }

            post {
                success {
                  slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")

                  hipchatSend (color: 'GREEN', notify: true,
                      message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})"
                    )

                  emailext (
                      subject: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                      body: """<p>SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
                        <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>""",
                      recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                    )
                }

                failure {
                  slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")

                  hipchatSend (color: 'RED', notify: true,
                      message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})"
                    )

                  emailext (
                      subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                      body: """<p>FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
                        <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>""",
                      recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                    )
                }

            stage("Delete docker images") {
                steps {
                    sh 'docker system prune -af --volumes'
                }
            }

            stage("Cleanup Workspace") {
                steps {
                    cleanWs()
                }
            }
        }
    }
}