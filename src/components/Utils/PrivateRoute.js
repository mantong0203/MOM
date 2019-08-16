import React from './node_modules/react'
import { Route, Redirect } from './node_modules/react-router-dom'
import TokenService from '../../services/token-service'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Component {...componentProps} />
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: componentProps.location }
              }}
            />
      )}
    />
  )
}
