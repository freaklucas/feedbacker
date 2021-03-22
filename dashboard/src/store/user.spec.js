import useStore from '../hooks/useStore'
import {
  cleanCurrentUser,
  resetUserStore,
  setApiKey,
  setCurrentUser
} from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })
  it('should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Lucas' })
    expect(store.User.CurrentUser.name).toBe('Lucas')
  })

  it('should set api_key on current user', () => {
    const store = useStore()
    setApiKey('123')
    expect(store.User.CurrentUser.apikey).toBe('123')
  })
  it('should clean current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Lucas' })
    expect(store.User.CurrentUser.name).toBe('Lucas')
    cleanCurrentUser()
    expect(store.User.CurrentUser.name).toBeFalsy()
  })
})
