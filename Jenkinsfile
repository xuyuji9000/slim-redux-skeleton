pipeline {
  agent {
    docker 'node:8.2'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'pwd'
      }
    }
  }
}
