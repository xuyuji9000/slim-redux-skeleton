pipeline {
    agent {docker 'node:8.1'}
    stages {
        stage('Build') {
            steps {
                sh 'echo "Hello World"'
                sh 'node --version'
            }
        }
    }
}
