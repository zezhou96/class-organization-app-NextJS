import GoogleProvider from 'components/auth/provider/google/google';
import GithubProvider from 'components/auth/provider/github/github';
import FacebookProvider from 'components/auth/provider/facebook/facebook';

export default function Home() {
  return (
  <div>
    <GoogleProvider>Continue with Google</GoogleProvider>
    <GithubProvider>Continue with Github</GithubProvider>
    <FacebookProvider>Continue with Facebook</FacebookProvider>
  </div>
  )
}
