pipeline {
  agent {
    docker 'node:8.2'
  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
        sh 'npm run install'
      }
    }
  }
}
