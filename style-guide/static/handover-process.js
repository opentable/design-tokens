export default {
  'nav.phase1': 'Phase 1: Discovery',
  'nav.phase2': 'Phase 2: Collect feedback',
  'nav.phase3': 'Phase 3: Implementation',
  'nav.phase4': 'Phase 4: Review',
  'nav.phase5': 'Phase 5: Post launch',

  header: "Opentable's design and development process guidelines",
  description: 'An interactive guide on how to work better together',
  title: "Away with the 'hand-off' and in with the ongoing collaboration",
  subtext1:
    'At OpenTable, we don’t believe in a final hand-off to engineers during the product development process. We believe that ongoing collaboration between engineers and designers is crucial to ensuring user-friendly and effective experiences.',
  subtext2:
    'This is a guide for engineers and designers on when and what to do to make working together seamless and productive.',

  phase1: 'Phase 1',
  'phase1.header': 'Gain context and ensure alignment',
  'phase1.subheader1': 'Get involved in the product brief',
  'phase1.description1':
    'A product manager will write and share a product brief at the start of the project. As a designer or engineer, you should feel welcome to review and provide feedback on all parts of the brief.  During development, continue to review the brief and designs to ensure you and all team members have a clear understanding of customer needs.',
  'phase1.subheader2': 'Align on vision with Story Mapping',
  'phase1.description2.1':
    'To ensure your team is aligned on workflows and outcomes, you can run a story mapping exercise.',
  'phase1.description2.2':
    'Story mapping is a practice of quickly building shared understanding and encouraging product, design, engineering and other stakeholders to define and prioritize the work. The exercise is helpful early in the process as a delivery tool, to support release planning and identify workflows without the need for designs.',
  'phase1.description2.3':
    'If the engineering group is small and there’s time, you can choose to involve all engineers in discussion. However to save time, the PM and designer can outline the user flow and slices and then review and iterate with engineer leads.',

  phase2: 'Phase 2',
  'phase2.header': 'Share and collaborate early and often',
  'phase2.subheader1': 'Request and provide feedback the right way',
  'phase2.description1':
    'Share work early in the process to allow both sides to gain a deeper understanding of the problem and allow engineers to ideate with designers. As you share or provide feedback, remember these tips:',

  'phase2.header1.list1.title': 'When requesting feedback remember to:',
  'phase2.header1.list1.1':
    'Provide context of user problems and business goals before sharing designs',
  'phase2.header1.list1.2':
    'State what type of feedback do you want (UX, UI, content, focused on specific area)',
  'phase2.header1.list1.3':
    'If unsure of a solution, walk through explorations',

  'phase2.header1.list2.title': 'When providing feedback remember to:',
  'phase2.header1.list2.1':
    'Have an understanding on the context and goals before providing feedback',
  'phase2.header1.list2.2':
    'Frame your feedback around the user problem and goals',
  'phase2.header1.list2.3': 'Lead with questions rather than problem solving',
  'phase2.header1.list2.4': 'Provide rationale',
  'phase2.header1.list2.5':
    'Remain objective, and avoid personal ‘I don’t like…’',
  'phase2.header1.list2.6':
    'Be conscious of where we are in the process (eg. content not finalized in wireframes)',

  'phase2.subheader2': 'Refine designs with engineering in mind',
  'phase2.description2':
    'While you may want to build the most flashy new experience, you’ll make a bigger impact if you understand the tradeoffs of feasibility and level of effort against user needs.',
  'phase2.header2.list1.title':
    'While discussing level of effort vs. user needs, ask:',
  'phase2.header2.list1.1':
    'Is there another way to solve this that can be less effort for engineering?',
  'phase2.header2.list1.2':
    'If we reduce scope, are we still solving the user problem?',
  'phase2.header2.list1.3':
    'How can the work be phased so that we ship fast and ultimately get to the final ideal product?',

  'phase2.subheader3': 'Collaborate and share content',
  'phase2.description3':
    'Keep everyone happy by ensuring content is aligned by all stakeholders before it’s in engineering hands. For designers, that may mean using a source of truth document to track all content. Use this tool as a way to collaborate with stakeholders and also communicate to engineering on content updates.',

  phase3: 'Phase 3',
  'phase3.header': 'Document and implement',
  'phase3.subheader1': 'Annotate all states',
  'phase3.description1':
    'As a designer, you should document and annotate work so that engineers can quickly understand designs and begin implementation.',

  'phase3.header1.list1.title': 'Leave no state behind',
  'phase3.header1.list1.desc':
    'Be mindful of end to end user flow and all states including:',
  'phase3.header1.list1.1': 'Interaction and behavior states',
  'phase3.header1.list1.2': 'Error states',
  'phase3.header1.list1.3': 'Empty states',
  'phase3.header1.list1.4': 'Hover & selected states',
  'phase3.header1.list1.5': 'Edge cases',
  'phase3.header1.list1.6': 'Responsiveness',
  'phase3.header1.list1.7': 'Translations',

  'phase3.header1.list2.title': 'Reuse existing patterns',
  'phase3.header1.list2.desc':
    'For designers, ensure you are using existing OTKit components using Figma libraries. If you don’t see a component in Figma, review the decision tree and come to OTKit Office Hours. We can help you!',

  'phase3.header1.list3.title': 'Reference Buffet/CFE',
  'phase3.header1.list3.desc':
    'When annotating designs, refer to existing patterns in Buffet/CFE. If it’s not in Buffet/CFE, communicate if it needs to be added, modified or AB tested. Before you add components to Buffet/CFE, make sure it is approved during OTKIt Office Hours.',

  'phase3.subheader2': 'Keep track of the work',
  'phase3.description2':
    'During implementation, engineers and designers can use Jira to keep track of all upcoming work and changes',

  'phase3.header2.list1.title': 'Provide details in Jira',
  'phase3.header2.list1.desc':
    'Depending on the team, engineering or design must ensure Jira tickets are aligned to the design (eg. naming conventions / tokens). Use live embed Figma frames or attach images/screenshots into Jira tickets so engineers can reference current design as well as historical changes.',

  'phase3.header2.list2.title': 'Communicate when designs have changed',
  'phase3.header2.list2.desc':
    'Designs can change after engineers have reviewed the work. Avoid confusion by giving a deadline to engineers on when designs will be complete. If you do need to change after engineering has reviewed, over-communicate in Figma, Jira or Slack to ensure they’re aware of updates.',

  phase4: 'Phase 4',
  'phase4.header': 'Review',
  'phase4.subheader1':
    'Quality check everything (and yes, we mean everything!)',

  phase5: 'Phase 5',
  'phase5.header': 'Monitor and launch post-launch',
  'phase5.subheader1': 'Communicate if updates need to be made',
  'phase5.description1':
    'After launch you’ll learn new things based on usage and feedback from users. If there are updates, document changes in Jira so that engineers can prioritize with other tasks. Where relevant, provide customer feedback with tickets to help provide context.',

  quote1:
    'The storymapping exercise was so beneficial for expectation setting with the product development team. It becomes a delivery tool, supports release planning and creates a shared discussion about workflows without needing to create designs.',
  'quote1.user': 'Jake Clements, Engineering Manager',

  quote2:
    'Open communication is critical to the product development process. Finding the preferred way of keeping track of design or copy changes (whether that is Jira, Figma or Slack) upfront avoids confusion down the road.',
  'quote2.user': 'Briana Lee, Product Designer',

  'resource1.title': 'Product brief template',
  'resource1.description':
    'There is no need to start from scratch. Use this template to get a project started.',
  'resource1.linkTitle': 'View the product brief template',
  'resource1.link':
    'https://docs.google.com/document/d/1v6ACgq_q_h37bNoj0VaiFxsrK5QWlMpWpz3WAIZUV9w/edit?usp=sharing',

  'resource2.title': 'Learn how to Story Map',
  'resource2.description':
    'Story mapping is a pattern. It’s how you make sense of a whole product or feature. You do so by breaking down large stories into smaller ones.',
  'resource2.linkTitle': 'View the guide',
  'resource2.link':
    'https://docs.google.com/presentation/d/1o7Y8i4FBvle93ozsOYqCB5nABY6bUhkgjb1ChHnU10E/edit',

  'resource3.title': 'Critiquing designs',
  'resource3.description':
    'Critique builds shared perspectives and values, leverages the strength of the entire team, and drives iteration and improvement.',
  'resource3.linkTitle': 'Learn how to critique',
  'resource3.link':
    'https://docs.google.com/presentation/d/1EUcknMgPzcaTFD86qGMvJh7eVOHjBb3Kw7e4Z5jBAZE/edit',

  'resource4.title': 'Product content process',
  'resource4.description':
    'Manage the way you collaborate and share final content with stakeholders with this guide.',
  'resource4.linkTitle': 'View the guide and template',
  'resource4.link':
    'https://docs.google.com/presentation/d/1DsTeOJDLtgidOcITfzJATFbHgMRk17XhwZ_bIJFlzZw/edit',

  'resource5.title': 'Buffet library',
  'resource5.description':
    'View all the components that exist today in Buffet Storybook. These are components used throughout the restaurant product.',
  'resource5.linkTitle': 'View Buffet components',
  'resource5.link': 'http://buffet-preview.pp-rs.otenv.com',

  'resource6.title': 'Decision Tree',
  'resource6.description':
    'Need help prioritizing your features? Use the decision tree template to move your project along.',
  'resource6.linkTitle': 'View the decision tree',
  'resource6.link':
    'https://docs.google.com/presentation/d/1OnmICmT_CPCMmV6YGj1lrhfgw5pXbbR-MzBRhBCUQqA/edit',

  'resource7.title': 'Quality assurance template',
  'resource7.description':
    'Want to maintain consistency and quality as you ship new products and features? Use this template to keep track of all issues.',
  'resource7.linkTitle': 'View the QA template',
  'resource7.link':
    'https://docs.google.com/spreadsheets/d/1MMqCNwuekumASLel3F9juv9ZJ_l1K22Hg3RiGS7X7Co/edit?usp=sharing'
};
