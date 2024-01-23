import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.notifications)
  if(notification && notification.message){
    const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return <div style={style}>{notification.message}</div>
}
  }
  

export default Notification
