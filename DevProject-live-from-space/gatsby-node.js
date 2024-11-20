const { documentToHtmlString } = require("@contentful/rich-text-html-renderer")
const { getGatsbyImageResolver } = require("gatsby-plugin-image/graphql-utils")

exports.createSchemaCustomization = ({ actions }) => {
  actions.createFieldExtension({
    name: "blocktype",
    extend(_options) {
      // add underscore for unused parameters
      return {
        resolve(source) {
          return source.internal.type.replace("Contentful", "")
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "imagePassthroughArgs",
    extend(_options) {
      // add underscore for unused parameters
      const { args } = getGatsbyImageResolver()
      return {
        args,
      }
    },
  })

  actions.createFieldExtension({
    name: "imageUrl",
    extend(_options) {
      // add underscore for unused parameters
      const schemaRE = /^\/\//
      const addURLSchema = (str) => {
        if (schemaRE.test(str)) return `https:${str}`
        return str
      }
      return {
        resolve(source) {
          return addURLSchema(source.file.url)
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "richText",
    args: {
      sourceType: {
        type: "String",
      },
    },
    extend(options) {
      const { sourceType } = options
      // add underscore for unused parameters
      return {
        resolve(source, _args, _context, _info) {
          // add underscore for unused parameters
          const body = source[`${sourceType}`] || source.body
          const doc = JSON.parse(body.raw)
          const html = documentToHtmlString(doc)
          return html
        },
      }
    },
  })

  // abstract interfaces
  actions.createTypes(/* GraphQL */ `
    interface PageContentBlock implements Node {
      id: ID!
      blocktype: String
    }

    interface Image implements Node {
      id: ID!
      alt: String
      gatsbyImageData: GatsbyImageData @imagePassthroughArgs
      url: String
    }

    interface Banner implements Node & PageContentBlock {
      id: ID!
      blocktype: String
      title: String!
      titleHighlight: String
      image: Image
      breadcrumbs: [String]
    }

    interface HomePageContent implements Node & PageContentBlock {
      id: ID!
      blocktype: String
      title: String!
      heroTitle: String
      heroTitleHighlight: String
      heroDescription: String
      heroPrimaryButtonText: String
      heroPrimaryButtonLink: String
      heroSecondaryButtonText: String
      heroSecondaryButtonLink: String
      introTitle: String
      introDescription: String
      introVideoThumbnail: Image
      servicesDetailsTitle: String
      servicesDetailsDescription: String
      servicesDetailsItems: [ServicesPageDetailsItem]
      partnerTitle: String
      partnerDescription: String
      partnerLogos: [Image]
      highlightTitle: String
      highlightDescription: String
      highlightImage: Image
      clientTitle: String
      clientDescription: String
      clientLogos: [Image]
    }

    interface HomePage implements Node {
      id: ID!
      title: String
      description: String
      image: Image
      content: [PageContentBlock]
    }

    interface ContactPageContent implements Node & PageContentBlock {
      id: ID!
      blocktype: String
      title: String!
      locationTitle: String
      locationInfo: [String]
      locationIconType: String
      callTitle: String
      callInfo: [String]
      callIconType: String
      emailTitle: String
      emailInfo: [String]
      emailIconType: String
      formTitle: String
      formDescription: String
      formButtonText: String
    }

    interface ContactPage implements Node {
      id: ID!
      title: String
      description: String
      image: Image
      content: [PageContentBlock]
    }

    interface ServicesPageDetailsItem implements Node {
      id: ID!
      title: String!
      description: String
      iconType: String
      link: String
    }

    interface ServicesPageSolutionsDetailsItem implements Node {
      id: ID!
      title: String!
      description: String
      features: [String]
    }

    interface ServicePageContent implements Node & PageContentBlock {
      id: ID!
      blocktype: String
      title: String!
      servicesDetailsTitle: String
      servicesDetailsDescription: String
      servicesDetailsItems: [ServicesPageDetailsItem]
      servicesHighlightTitle: String
      servicesHighlightDescription: String
      servicesHighlightImage: Image
      solutionDetailsTitle: String
      solutionDetailsDescription: String
      solutionDetailsImage: Image
      solutionDetailsItems: [ServicesPageSolutionsDetailsItem]
      serviceName: String
      serviceImage: Image
      body: String
    }

    interface ServicesPage implements Node {
      id: ID!
      title: String
      description: String
      image: Image
      content: [PageContentBlock]
    }

    interface NavBarItem implements Node {
      id: ID!
      title: String!
      link: String!
      subItems: [NavBarItem]
    }

    interface LayoutHeader implements Node {
      id: ID!
      title: String
      logo: Image
      navBar: [NavBarItem]
      ctaButtonText: String
      ctaButtonLink: String
    }

    interface FooterLinksItem implements Node {
      id: ID!
      title: String!
      link: String!
    }

    interface FooterLinks implements Node {
      id: ID!
      title: String!
      items: [FooterLinksItem]
    }

    interface LayoutFooter implements Node {
      id: ID!
      title: String!
      logo: Image
      phoneNumber: String
      email: String
      twitterLink: String
      facebookLink: String
      instagramLink: String
      footerLinks: [FooterLinks]
      copyright: String
    }

    interface ContentHighlight implements Node & PageContentBlock {
      id: ID!
      blocktype: String
      title: String!
      description: String
      backgroundImage: Image
    }

    interface AboutPageContent implements Node & PageContentBlock {
      id: ID!
      blocktype: String
      title: String!
      companyProfileTitle: String
      companyProfileDescription: String
      companyProfileServices: [String]
      companyProfileImage: Image
      missionTitle: String
      missionDescription: String
      missionImage: Image
      partnershipTitle: String
      partnershipTitleTags: [String]
      partnershipDescription: String
      partnershipImage: Image
      coreValuesTitle: String
      coreValuesDescription: String
      coreValuesImage: Image
      careerTitle: String
      careerDescription: String
      careerButtonText: String
      careerButtonLink: String
      careerImage: Image
      aboutContactTitle: String
      aboutContactDescription: String
      aboutContactButtonText: String
      aboutContactButtonLink: String
      aboutContactPartnerLogos: [Image]
    }

    interface AboutPage implements Node {
      id: ID!
      title: String
      description: String
      image: Image
      content: [PageContentBlock]
    }

    interface BlogsPage implements Node {
      id: ID!
      title: String
      description: String
      image: Image
      content: [PageContentBlock]
    }

    interface BlogPost implements Node {
      id: ID!
      title: String!
      slug: String!
      image: Image
      body: String @richText(sourceType: "body")
      author: String
      date: Date
      tags: [String]
    }

    interface Page implements Node {
      id: ID!
      slug: String!
      title: String
      description: String
      image: Image
      html: String!
    }

    interface SingleServicePage implements Node {
      id: ID!
      slug: String!
      title: String
      description: String
      image: Image
      bannerImage: Image
      bannerBreadcrumbs: [String]
      serviceName: String
      serviceImage: Image
      html: String!
      solutionDetailsTitle: String
      solutionDetailsDescription: String
      solutionDetailsImage: Image
      solutionDetailsItems: [ServicesPageSolutionsDetailsItem]
      aboutContactTitle: String
      aboutContactDescription: String
      aboutContactButtonText: String
      aboutContactButtonLink: String
      aboutContactPartnerLogos: [Image]
    }
  `)

  // CMS-specific types for Home Page
  actions.createTypes(/* GraphQL */ `
    type ContentfulAsset implements Node & Image {
      id: ID!
      alt: String @proxy(from: "title")
      gatsbyImageData: GatsbyImageData
      url: String @imageUrl
      file: JSON
      title: String
    }

    type ContentfulHomePageContent implements Node & HomePageContent & PageContentBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      title: String!
      heroTitle: String
      heroTitleHighlight: String
      heroDescription: String
      heroPrimaryButtonText: String
      heroPrimaryButtonLink: String
      heroSecondaryButtonText: String
      heroSecondaryButtonLink: String
      introTitle: String
      introDescription: String @richText(sourceType: "introDescription")
      introVideoThumbnail: Image @link(from: "introVideoThumbnail___NODE")
      servicesDetailsTitle: String
      servicesDetailsDescription: String
        @richText(sourceType: "servicesDetailsDescription")
      servicesDetailsItems: [ServicesPageDetailsItem]
        @link(from: "servicesDetailsItems___NODE")
      partnerTitle: String
      partnerDescription: String @richText(sourceType: "partnerDescription")
      partnerLogos: [Image] @link(from: "partnerLogos___NODE")
      highlightTitle: String
      highlightDescription: String @richText(sourceType: "highlightDescription")
      highlightImage: Image @link(from: "highlightImage___NODE")
      clientTitle: String
      clientDescription: String @richText(sourceType: "clientDescription")
      clientLogos: [Image] @link(from: "clientLogos___NODE")
    }

    type ContentfulHomePage implements Node & HomePage @dontInfer {
      id: ID!
      title: String
      description: String
      image: Image @link(from: "image___NODE")
      content: [PageContentBlock] @link(from: "content___NODE")
    }
  `)

  // CMS specific types for About page
  actions.createTypes(/* GraphQL */ `
    type ContentfulAboutPageContent implements Node & AboutPageContent & PageContentBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      title: String!
      companyProfileTitle: String
      companyProfileDescription: String
        @richText(sourceType: "companyProfileDescription")
      companyProfileServices: [String]
      companyProfileImage: Image @link(from: "companyProfileImage___NODE")
      missionTitle: String
      missionDescription: String @richText(sourceType: "missionDescription")
      missionImage: Image @link(from: "missionImage___NODE")
      partnershipTitle: String
      partnershipTitleTags: [String]
      partnershipDescription: String
        @richText(sourceType: "partnershipDescription")
      partnershipImage: Image @link(from: "partnershipImage___NODE")
      coreValuesTitle: String
      coreValuesDescription: String
        @richText(sourceType: "coreValuesDescription")
      coreValuesImage: Image @link(from: "coreValuesImage___NODE")
      careerTitle: String
      careerDescription: String @richText(sourceType: "careerDescription")
      careerButtonText: String
      careerButtonLink: String
      careerImage: Image @link(from: "careerImage___NODE")
      aboutContactTitle: String
      aboutContactDescription: String
      aboutContactButtonText: String
      aboutContactButtonLink: String
      aboutContactPartnerLogos: [Image]
        @link(from: "aboutContactPartnerLogos___NODE")
    }

    type ContentfulAboutPage implements Node & AboutPage @dontInfer {
      id: ID!
      title: String
      description: String
      image: Image @link(from: "image___NODE")
      content: [PageContentBlock] @link(from: "content___NODE")
    }
  `)

  // CMS specific types for Blogs page
  actions.createTypes(/* GraphQL */ `
    type ContentfulBlogsPage implements Node & BlogsPage @dontInfer {
      id: ID!
      title: String
      description: String
      image: Image @link(from: "image___NODE")
      content: [PageContentBlock] @link(from: "content___NODE")
    }

    type ContentfulBlogPost implements Node & BlogPost @dontInfer {
      id: ID!
      title: String!
      slug: String!
      image: Image @link(from: "image___NODE")
      body: String @richText(sourceType: "body")
      author: String
      date: Date
      tags: [String]
    }
  `)

  // CMS specific types for Services page
  actions.createTypes(/* GraphQL */ `
    type ContentfulServicesPageDetailsItem implements Node & ServicesPageDetailsItem
      @dontInfer {
      id: ID!
      title: String!
      description: String
      iconType: String
      link: String
    }

    type ContentfulServicesPageSolutionsDetailsItem implements Node & ServicesPageSolutionsDetailsItem
      @dontInfer {
      id: ID!
      title: String!
      description: String
      features: [String]
    }

    type ContentfulServicePageContent implements Node & ServicePageContent & PageContentBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      title: String!
      servicesDetailsTitle: String
      servicesDetailsDescription: String
        @richText(sourceType: "servicesDetailsDescription")
      servicesDetailsItems: [ServicesPageDetailsItem]
        @link(from: "servicesDetailsItems___NODE")
      servicesHighlightTitle: String
      servicesHighlightDescription: String
        @richText(sourceType: "servicesHighlightDescription")
      servicesHighlightImage: Image @link(from: "servicesHighlightImage___NODE")
      solutionDetailsTitle: String
      solutionDetailsDescription: String
        @richText(sourceType: "solutionDetailsDescription")
      solutionDetailsImage: Image @link(from: "solutionDetailsImage___NODE")
      solutionDetailsItems: [ServicesPageSolutionsDetailsItem]
        @link(from: "solutionDetailsItems___NODE")
      serviceName: String
      serviceImage: Image @link(from: "serviceImage___NODE")
      body: String @richText(sourceType: "body")
    }

    type ContentfulServicesPage implements Node & ServicesPage @dontInfer {
      id: ID!
      title: String
      description: String
      image: Image @link(from: "image___NODE")
      content: [PageContentBlock] @link(from: "content___NODE")
    }
  `)

  // CMS specific types for Contact page
  actions.createTypes(/* GraphQL */ `
    type ContentfulContactPageContent implements Node & ContactPageContent & PageContentBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      title: String!
      locationTitle: String
      locationInfo: [String]
      locationIconType: String
      callTitle: String
      callInfo: [String]
      callIconType: String
      emailTitle: String
      emailInfo: [String]
      emailIconType: String
      formTitle: String
      formDescription: String
      formButtonText: String
    }

    type ContentfulContactPage implements Node & ContactPage @dontInfer {
      id: ID!
      title: String
      description: String
      image: Image @link(from: "image___NODE")
      content: [PageContentBlock] @link(from: "content___NODE")
    }
  `)

  // Layout types
  actions.createTypes(/* GraphQL */ `
    type ContentfulBanner implements Node & Banner & PageContentBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      title: String!
      titleHighlight: String
      image: Image @link(from: "image___NODE")
      breadcrumbs: [String]
    }

    type ContentfulNavBarItem implements Node & NavBarItem @dontInfer {
      id: ID!
      title: String!
      link: String!
      subItems: [NavBarItem] @link(from: "subItems___NODE")
    }

    type ContentfulLayoutHeader implements Node & LayoutHeader @dontInfer {
      id: ID!
      title: String
      logo: Image @link(from: "logo___NODE")
      navBar: [NavBarItem] @link(from: "navBar___NODE")
      ctaButtonText: String
      ctaButtonLink: String
    }

    type ContentfulFooterLinksItem implements Node & FooterLinksItem
      @dontInfer {
      id: ID!
      title: String!
      link: String!
    }

    type ContentfulFooterLinks implements Node & FooterLinks @dontInfer {
      id: ID!
      title: String!
      items: [FooterLinksItem] @link(from: "items___NODE")
    }

    type ContentfulLayoutFooter implements Node & LayoutFooter @dontInfer {
      id: ID!
      title: String!
      logo: Image @link(from: "logo___NODE")
      phoneNumber: String
      email: String
      twitterLink: String
      facebookLink: String
      instagramLink: String
      footerLinks: [FooterLinks] @link(from: "footerLinks___NODE")
      copyright: String
    }

    type ContentfulContentHighlight implements Node & ContentHighlight & PageContentBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      title: String!
      description: String
      backgroundImage: Image @link(from: "backgroundImage___NODE")
    }
  `)

  // Page types
  actions.createTypes(/* GraphQL */ `
    type ContentfulPage implements Node & Page {
      id: ID!
      slug: String!
      title: String
      description: String
      image: Image @link(from: "image___NODE")
      html: String! @richText(sourceType: "body")
    }

    type ContentfulSingleServicePage implements Node & SingleServicePage {
      id: ID!
      slug: String!
      title: String
      description: String
      image: Image @link(from: "image___NODE")
      bannerImage: Image @link(from: "bannerImage___NODE")
      bannerBreadcrumbs: [String]
      serviceName: String
      serviceImage: Image @link(from: "serviceImage___NODE")
      html: String! @richText(sourceType: "body")
      solutionDetailsTitle: String
      solutionDetailsDescription: String
        @richText(sourceType: "solutionDetailsDescription")
      solutionDetailsImage: Image @link(from: "solutionDetailsImage___NODE")
      solutionDetailsItems: [ServicesPageSolutionsDetailsItem]
        @link(from: "solutionDetailsItems___NODE")
      aboutContactTitle: String
      aboutContactDescription: String
      aboutContactButtonText: String
      aboutContactButtonLink: String
      aboutContactPartnerLogos: [Image]
        @link(from: "aboutContactPartnerLogos___NODE")
    }
  `)
}

exports.createPages = ({ actions }) => {
  const { createSlice } = actions
  createSlice({
    id: "header",
    component: require.resolve("./src/layout/header/index.tsx"),
  })
  createSlice({
    id: "footer",
    component: require.resolve("./src/layout/footer/index.tsx"),
  })
  createSlice({
    id: "scroll-to-top",
    component: require.resolve(
      "./src/components/common/scroll-to-top/index.tsx"
    ),
  })
}
