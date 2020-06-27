import * as React from 'react'
import { DevpostLogo, GitHubLogo, LinkedInLogo } from '../images/icons'

export default () => (
  <div className="social-links">
    <a href="https://github.com/evanrupert" className="github-logo"><GitHubLogo /></a>
    <a href="https://linkedin.com/in/evan-rupert" className="linkedin-logo"><LinkedInLogo /></a>
    <a href="https://devpost.com/EvanRupert" className="devpost-logo"><DevpostLogo /></a>
  </div>
)
