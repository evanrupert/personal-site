import * as React from 'react'
import { Link } from 'gatsby'
import SocialLinks from '../components/SocialLinks'

import {
  BackendLogo,
  CollaborationLogo,
  DatabaseLogo,
  DevOpsLogo,
  FrontendLogo,
  TestingLogo,
  RightArrow
} from '../images/icons'

// @ts-ignore
import picture from '../images/picture.jpg'

const SkillBullet = (props: { skill: string, subSkill?: string, highlight?: boolean }) => {
  const mainSkillTag =
    props.highlight ? <strong>{props.skill}</strong> : props.skill

  const subSkillTag =
    props.subSkill && <span className="sub-skill">{props.subSkill}</span>

  return (
    <li>
      <RightArrow />
      {mainSkillTag}
      {subSkillTag}
    </li>
  )
}

const SkillsSection = () => (
  <section className="skills">
    <h2>What I Know Best</h2>
    <BackendLogo />
    <article>
      <h3>BACKEND DEVELOPMENT</h3>
      <ul>
        <SkillBullet skill="Spring Web" subSkill="Kotlin" highlight />
        <SkillBullet skill="Phoenix Framework" subSkill="Elixir" />
        <SkillBullet skill="Node/Express" subSkill="JavaScript/TypeScript" />
        <SkillBullet skill="Firebase" />
      </ul>
    </article>
    <article>
      <h3>FRONTEND DEVELOPMENT</h3>
      <ul>
        <SkillBullet skill="Angular 2+" subSkill="TypeScript" highlight />
        <SkillBullet skill="Static Websites" subSkill="HTML/CSS" />
        <SkillBullet skill="Vue" subSkill="TypeScript/HTML/SCSS" />
        <SkillBullet skill="React Native" subSkill="JavaScript/JSX/CSS" />
      </ul>
    </article>
    <FrontendLogo />
    <DatabaseLogo />
    <article>
      <h3>DATA PERSISTENCE</h3>
      <ul>
        <SkillBullet skill="PostgreSQL/MySQL/SQL" subSkill="SQL" highlight />
        <SkillBullet skill="MongoDB/Mongoose" subSkill="JavaScript/TypeScript" />
        <SkillBullet skill="Cloud Firestore" subSkill="TypeScript" />
        <SkillBullet skill="Ecto" subSkill="Elixir" />
      </ul>
    </article>
    <article>
      <h3>TESTING</h3>
      <ul>
        <SkillBullet skill="Test Driven Development" highlight />
        <SkillBullet skill="Jasmine/Mocha & Chai" subSkill="TypeScript/JavaScript" />
        <SkillBullet skill="Selenium/FluentLenium" subSkill="Kotlin" />
        <SkillBullet skill="Cypress End to End" subSkill="TypeScript" />
        <SkillBullet skill="JUnit" subSkill="Kotlin/Java" />
      </ul>
    </article>
    <TestingLogo />
    <CollaborationLogo />
    <article>
      <h3>COLLABORATION</h3>
      <ul>
        <SkillBullet skill="Pair Programming" highlight />
        <SkillBullet skill="Git" />
        <SkillBullet skill="Agile Methodology" />
        <SkillBullet skill="Jira" />
        <SkillBullet skill="Pivotal Tracker" />
      </ul>
    </article>
    <article>
      <h3>DEVOPS</h3>
      <ul>
        <SkillBullet skill="Gitlab CI/CD" highlight />
        <SkillBullet skill="Docker" />
        <SkillBullet skill="Google Analytics" />
        <SkillBullet skill="Firebase" />
      </ul>
    </article>
    <DevOpsLogo />
    <h2>Other Experience</h2>
    <p className="other-experience">
      ASP.NET Entity Framework · ASP.NET MVC · ASP.NET Razer · ASP.NET Web Forms · Azure Functions · Azure VM · C
       · C# · C++ · Chat Bots · Clojure · Elm · F# · GCP Compute · GCP Functions · Go · Haskell · Java · Linux
       · Python · Raspberry Pi · Rust · Sass · Scala · Slack Bots
    </p>
  </section>
)

const ReachOutLink = () => (
  <Link className="reach-out" to="/contact">Reach Out</Link>
)

const MyWorkLink = () => (
  <Link className="my-work" to="/portfolio">
    Check Out My Work
    <RightArrow />
  </Link>
)

const HeroSection = () => (
  <section className="hero">
    <h1>
      Hi I&apos;m Evan and
      <br />
      I make things
    </h1>
    <h3>
      I&apos;m a Software Developer and I specialize in
      <br />
      full-stack application production.
    </h3>
    <div className="links">
      <ReachOutLink/>
      <MyWorkLink/>
    </div>
    <img src={picture} alt="Me" />
    <SocialLinks />
  </section>
)

const IndexPage = () => (
  <div className="index-page-container">
    <HeroSection />
    <SkillsSection/>
  </div>
)

export default IndexPage
