pipeline {
    agent any

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
            stage('Build image') {
                steps {
                    script {
                        // Build Docker image
                        docker.build('steven8519/engineer-ui')
                    }
                }
            }
            stage('Push image') {
                steps {
                    script {
                        docker.withRegistry('', 'dockerhub') {
                            docker.image('steven8519/engineer-ui').push(env.BUILD_NUMBER)
                        }
                    }
                }
            }
            stage('Approval') {
                        steps {
                            script {
                                def deploymentDelay = input id: 'Deploy',
                                message: 'Deploy to production?' [1]
                            }
                        }
                    }
            stage('Deployment into production') {
                steps {
                    echo "triggering updateuimanifest"
                    build job: 'updateuimanifest', parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
                }
            }
        }
    }
