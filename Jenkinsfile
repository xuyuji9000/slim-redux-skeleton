pipeline {
  agent {
    docker 'node:8.2'
  }
  stages {
    stage('Test') {
      steps {
        sh 'pwd'
        sh 'ls -lat'
        sh 'npm install'
      }
    }
  }
}
