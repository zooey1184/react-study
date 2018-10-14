const router = (state='/', action)=> {
  switch (action.type) {
    case 'ROUTER':
      return action.router
    default:
      return state
  }
}
export default router