"use client"

import { Once } from "@/components/motion/Once";
import { Stagger, OnceItem } from "@/components/motion/Stagger";
import HoverNode from "@/components/HoverNode/HoverNode";
import styles from "./Skills.module.css";
import { IconAccessible, IconBrandFigma, IconBrandGithub, IconBrandGoogle, IconBrandHtml5, IconBrandJavascript, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandTypescript, IconBrandVercel, IconBuildingLighthouse, IconGauge, IconSchema, IconTypography } from "@tabler/icons-react";

export default function Skills() {
    return (
        <Once id="skills" className="section">
            <div className={`content ${styles.skillsWrapper}`}>
                <div className={styles.skillsContent}>
                    <div className="sectionLabel">Skills</div>
                    <h2 className="h2">Built with the Right Tools</h2>
                    <p className="p2">Every tool in my stack is chosen for performance, maintainability, and long-term value, not because it&apos;s trending.</p>
                </div>
                <Stagger className={styles.skillsGrid}>
                    <OnceItem className={styles.skillsFlex}>
                        <div className={styles.skillsNumber}>01</div>
                        <div className={styles.skillsFlexContent}>
                            <h3 className="h3">Design</h3>
                            <p className="p2">From wireframe to finished design, in one place.</p>
                            <div className={styles.skillsNodeFlex}>
                                <HoverNode
                                    label="Figma"
                                    icon={IconBrandFigma}
                                    description="The industry standard for UI design. I use Figma to build out full design systems before a single line of code is written, so you can review and approve the look of your site without having to imagine it."
                                />
                                <HoverNode
                                    label="Accessible UI"
                                    icon={IconAccessible}
                                    description="Accessibility is designed in, not bolted on afterward. Building with accessibility in mind from the start means your site works for everyone and holds up against WCAG 2.1 AA standards without a separate audit pass."
                                />
                                <HoverNode
                                    label="Typography Systems"
                                    icon={IconTypography}
                                    description="Good type choices are the fastest way to make a site feel intentional. I use structured type scales and pairings to create visual hierarchy that guides visitors exactly where they need to go."
                                />
                            </div>
                        </div>
                    </OnceItem>
                    <OnceItem className={styles.skillsFlex}>
                        <div className={styles.skillsNumber}>02</div>
                        <div className={styles.skillsFlexContent}>
                            <h3 className="h3">Frontend</h3>
                            <p className="p2">Fast, type-safe, and built to last.</p>
                            <div className={styles.skillsNodeFlex}>
                                <HoverNode
                                    label="Next.js"
                                    icon={IconBrandNextjs}
                                    description="The framework this site is built on. Next.js handles server-side rendering, static generation, image optimization, and routing out of the box — faster load times, better SEO, and less manual configuration."
                                />
                                <HoverNode
                                    label="React"
                                    icon={IconBrandReact}
                                    description="The most widely used UI library available. React's component model keeps code organized and reusable, which makes your site easier to maintain and extend as your business grows."
                                />
                                <HoverNode
                                    label="TypeScript"
                                    icon={IconBrandTypescript}
                                    description="JavaScript with types. TypeScript catches errors at development time rather than in production — fewer bugs, cleaner code, and a codebase that's easier for anyone to work in later."
                                />
                                <HoverNode
                                    label="HTML/CSS"
                                    icon={IconBrandHtml5}
                                    description="The foundation everything else is built on. Strong semantic HTML is what makes a site accessible, indexable, and structurally sound — and it's where most shortcuts eventually catch up with you."
                                />
                                <HoverNode
                                    label="JavaScript"
                                    icon={IconBrandJavascript}
                                    description="The language that powers the modern web. Used where interactivity matters and kept lean so it never becomes a performance liability."
                                />
                            </div>
                        </div>
                    </OnceItem>
                    <OnceItem className={styles.skillsFlex}>
                        <div className={styles.skillsNumber}>03</div>
                        <div className={styles.skillsFlexContent}>
                            <h3 className="h3">Infrastructure</h3>
                            <p className="p2">Deployed fast, maintained cleanly.</p>
                            <div className={styles.skillsNodeFlex}>
                                <HoverNode
                                    label="Vercel"
                                    icon={IconBrandVercel}
                                    description="The deployment platform built specifically for Next.js. Vercel gives every site automatic HTTPS, global edge caching, continuous deployment from GitHub, and performance monitoring — with zero server configuration required."
                                />
                                <HoverNode
                                    label="Node.js"
                                    icon={IconBrandNodejs}
                                    description="Used for build tooling, serverless API routes, and form handling. Node keeps the backend lightweight and consistent with the JavaScript already running on the frontend."
                                />
                                <HoverNode
                                    label="Git/GitHub"
                                    icon={IconBrandGithub}
                                    description="Every project lives in a version-controlled repository. That means every change is tracked, every mistake is recoverable, and you always have a clean handoff if you bring in another developer down the road."
                                />
                            </div>
                        </div>
                    </OnceItem>
                    <OnceItem className={styles.skillsFlex}>
                        <div className={styles.skillsNumber}>04</div>
                        <div className={styles.skillsFlexContent}>
                            <h3 className="h3">SEO and Performance</h3>
                            <p className="p2">Visibility and speed, built in from day one.</p>
                            <div className={styles.skillsNodeFlex}>
                                <HoverNode
                                    label="Core Web Vitals"
                                    icon={IconGauge}
                                    description="Google's official performance metrics: how fast your page loads, how stable the layout is, and how quickly it responds to input. Every site I build targets a 95+ score because these directly affect where you rank."
                                />
                                <HoverNode
                                    label="Schema Markup"
                                    icon={IconSchema}
                                    description="Structured data that tells Google exactly what your business is, where you're located, and what you offer. Schema is what gets you into local pack results and FAQ listings — spots most sites never reach."
                                />
                                <HoverNode
                                    label="Google Search Console"
                                    icon={IconBrandGoogle}
                                    description="The primary tool for monitoring how your site performs in search. I set it up at launch and use it to verify indexing, track keyword rankings, and catch crawl errors before they affect visibility."
                                />
                                <HoverNode
                                    label="Lighthouse"
                                    icon={IconBuildingLighthouse}
                                    description="Google's auditing tool for performance, accessibility, SEO, and best practices. I run it on every build before launch and resolve any flagged issues — so your site ships in its best possible state."
                                />
                            </div>
                        </div>
                    </OnceItem>
                </Stagger>
            </div>
        </Once>
    )
}
