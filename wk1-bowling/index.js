let frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]


function scoreGame(frames) {
  let gameScore = 0

  for(let i = 0; i < frames.length; i++) {
    let currentFrame = frames[i]
    let ballOne = currentFrame[0]
    let ballTwo = currentFrame[1]
    let nextFrame = frames[i+1] // || [0,0]

    let nextFrameBallOne = nextFrame ? nextFrame[0] : 0
    let nextFrameBallTwo = nextFrame ? nextFrame[1] : 0

    // let nextFrameBallOne
    // if(nextFrame) {
    //   nextFrameBallOne = nextFrame[0]
    // } else {
    //   nextFrameBallOne = 0
    // }

    let nextNextFrame = frames[i+2]



    let frameScore = ballOne + ballTwo

    // Spare
    // if(frameScore == 10 && ballOne != 10) {

    if(frameIsASpare(currentFrame)) {
      frameScore += nextFrameBallOne
    }

    // Strike
    if(frameScore == 10 && ballOne == 10) {
      // Double Strike
      if(nextFrameBallOne == 10) {
        frameScore += nextFrameBallOne + nextNextFrame[0]
      } else {
        frameScore += nextFrameBallOne + nextFrameBallTwo
      }
    }

    console.log(currentFrame, frameScore)
    gameScore = gameScore + frameScore
  }

  return gameScore
}

function frameIsASpare(frame) {
  return simpleFrameScore(frame) == 10 && ballOne(frame) != 10
}

function simpleFrameScore(frame) {
  return ballOne(frame) + ballTwo(frame)
}

function ballOne(frame) {
  return frame[0]
}

function ballTwo(frame) {
  return frame[1]
}


console.log('Score: ', scoreGame(frames))
console.log('Should be: 119')
