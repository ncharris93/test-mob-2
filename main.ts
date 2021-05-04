const main = () => {
  console.log('Hey!')
  const getRandom = () => {
    return Math.random()
  }
  if (getRandom() > 0.5) {
    console.log('random is less than 0.5')
  }
  if (getRandom() === 0.7) {
    console.log('0.7')
  }

  const getMoreStuff = () => {
    return Array(25)
  }
}

main()
