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
            stage('K8S Deploy') {
                steps {
                    script {
                        withKubeConfig([credentialsId: 'K8S', serverUrl: '']) {
                            sh ('kubectl apply -f  deployment.yml')
                        }
                    }
                }
            }
            stage('K8S Service') {
                steps {
                    script {
                        withKubeConfig([credentialsId: 'K8S', serverUrl: '']) {
                            sh ('kubectl apply -f service.yml')
                        }
                    }
                }
            }
        }
    }