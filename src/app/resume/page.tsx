import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  title,
  years,
  children,
  ...props
}: {
  title: string
  years: string
  children: React.ReactNode
}) {
  return (
    <Section title={title} years={years} {...props}>
      <ul role="list" className="ml-4 space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Key achievements, projects and other things I've done."
      intro="A short summary of key projects, major integrations and business development achievements."
    >
      <div className="space-y-20">
        <ToolsSection
          title="Head of Go-To-Market, Digital Bank Poland and Romania | Head of Baltics at Western Union"
          years="2023 - present"
        >
          <Tool title="As Head of Go-To-Market: Leading the creation and implementation of Go-To-Market strategies for Western Union Digital Bank in Poland and Romania, employing the latest AI technologies and programming methodologies to optimize the processes and customer experience.">
            Developed and implemented an internal Web App dashboard using
            Next.js/React.js for geographical data visualization, demonstrating
            both strategic insights and practical technical capabilities.
            <br />
            Driving product development and enhancements, tailoring products to
            customer needs and market trends <br />
            Established and nurtured key digital partnerships to foster
            collaboration and mutual business growth. <br />
            Leveraging advanced data analytics and programming skills to
            optimize strategies, support data-driven decisions, and monitor the
            bank&apos;s performance. <br />
            Developing competitive pricing strategies, balancing profitability
            with customer acquisition and retention.
          </Tool>
          <Tool title="As Head of Baltics: Overseeing revenue development, driving sustainable growth through strategic initiatives.">
            Negotiated multimillion-dollar contracts with Tier-1 financial
            institutions from the region, fostering relationships with key
            stakeholders and contributing to the financial health of the
            organization. <br />
            Directing digital product enhancements, staying abreast of
            technological advancements to maintain a competitive edge. <br />
            Managing operations across the Baltic region, leveraging AI and the
            latest technologies to ensure efficiency and compliance with all
            relevant standards and regulations. <br />
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Head of Sales & Integrations at Western Union"
          years="2021 - 2023"
        >
          <Tool
            title="Signed, executed and launched 3 Key Account contracts with
              Financial Institutions in Germany and Switzerland ensuring multimilion incremental revenue stream for WU."
          >
            Leading Western Union Enterprise Partnerships development across
            Central Europe (DACHL/CEE). <br />
            Driving incremental revenue through WU cross-border payments product
            integrations to Financial Institution&apos;s ecosystem (Tier 1 - 2
            banks & fintechs).
            <br />
            Ultimately responsible for the solution delivery, managing several
            cross-functional teams. Holistically responsible for sales, contract
            negotiations, business & compliance requirements capture, solution
            tailoring and Go-To-Market strategy.
          </Tool>
          <Tool
            title="Co-created 3-year omnichannel strategy for Germany and
              Switzerland."
          >
            Tasked with creating a new omnichannel strategy for Western Union in
            Germany and Switzerland to ensure the company&apos;s long-term
            success in the region. The strategy was based on a deep
            understanding of the market, customers, the competitive landscape,
            and the company&apos;s strengths and weaknesses. The strategy was
            presented to the WU Executive team and was approved.
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Digital Product Manager - Strategic Partnerships at Western Union"
          years="2018 - 2021"
        >
          <Tool title="Signed and executed contracts with 2 primary digital payment solutions in Germany, Poland and Switzerland">
            New payment methods were the key driver to new customer acquisition
            and retention across WU products. I was responsible for the product
            development, managing several cross-functional teams, business &
            compliance requirements capture, solution tailoring and Go-To-Market
            strategy.
          </Tool>
          <Tool title="Successful launch of 8 (countries) WU mobile applications, implementation of new ID verification method in Germany">
            Ultimately responsible for new products and product extension
            launches (WU App) in Central Europe. - Managing key product metrics,
            and analytics and enhancing the customer experience within WU Core
            Digital Products.
          </Tool>
          <Tool title="All Key Accounts met the imposed financial targets">
            Executing the proper dynamic pricing and FX strategy on the covered
            markets. <br />
            Coordinating proper adoption of key Compliance requirements such as
            the 4th AML Directive and PSD2 to core products and partners&apos;
            ecosystems in close cooperation with Compliance, InfoSec and
            Privacy.
          </Tool>
        </ToolsSection>

        <ToolsSection
          title="Business Development Manager at Western Union"
          years="2014 - 2018"
        >
          <Tool title="Signed 12 WU exclusive agent contracts in 4 years with major organisations across Central Europe, consistently delivering WU revenue targets and appropriate network quality.">
            Successfully managed the Croatian and Hungarian markets improving WU
            market share position in both countries. Led 14 Key Accounts (Banks,
            Post Offices and Global Retail Services, 20,000 POS) with a proven
            track of renewed WU contracts and new agent signings.
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Compliance Officer, at Western Union"
          years="2012 - 2014"
        >
          <Tool title="Developed and updated WU Central Eastern Europe Compliance policies and procedures. Onboarded 10+ WU agents in line with PSD2 and 4th AML Directive requirements. Built several analytics tools in Python & VBA ensuring the best data visualisation for Risk Control Teams.">
            Consumer Protection, Compliance & Ethics Officer responsible for Key
            Accounts (Banking and Retail) in CEE region. Conducting agent
            oversight, audits and Due Diligence analysis. Actively participating
            in the reinforcement of the internal AML programme. Specialized in
            Fraud and Cyber Crimes acting as the major point of contact for
            Regulators, Police, Prosecutors and Tax Office in CEE.
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Corporate Compliance, at State Street Bank Luxembourg"
          years="2011 - 2012"
        >
          <Tool title=" Member of the State Street Bank Luxembourg Regulatory Steering Committee, responsible for Regulatory updates and Regulatory risk assessment. Member and co-organiser of SSBL Group Oversight Committee, dedicated to Group supervision over European State Street Bank branches.">
            Led several Due Diligence analyses on High Risk corporate and
            individual investors resulting in minimizing regulatory risk
            exposure of SSBL. Assisted IFDSL (State Street Bank delegated
            Transfer Agent) in assessing new AML and KYC regulation, which has
            been recognized by IFDSL Board. Responsible for analysis and
            supervision of the Suspicious Transaction Monitoring process.
          </Tool>
        </ToolsSection>
        <ToolsSection
          title="Senior AML Analyst, at Royal Bank of Scotland (NatWest Group)"
          years="2008 - 2011"
        >
          <Tool title="Leading the team of 4 people, responsible for extensive Due Diligence of corporate clients in France, Belgium and Luxembourg.">
            Provided several onsite trainings in Luxembourg directly with
            high-value corporate clients. Contributed significantly to RBS Group
            Anti-money laundering manual, updating procedures and policies as
            well as leading the training team for new hires.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
