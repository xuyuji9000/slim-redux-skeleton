pipeline {
  agent {
    docker 'node:8.2'
  }
  stages {
    stage('Build') {
      steps {
        sh 'cd ../ && ls -lat '
        //sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'pwd'
      }
    }
  }
}
