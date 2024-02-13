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
            stage("Docker Build and Push") {
                steps {
                    sh ' docker buildx build --push --platform linux/amd64 --tag steven8519/engineer-ui:latest .'
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
