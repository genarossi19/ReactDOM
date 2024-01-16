import { ProgressBar } from 'react-loader-spinner'

function Loading() {
  return (
    <ProgressBar
  visible={true}
  height="80"
  width="80"
  color="#FF4D4D"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  borderColor='#FF4D4D'
  barColor='#FF4D4D'
  />
  )
}

export default Loading