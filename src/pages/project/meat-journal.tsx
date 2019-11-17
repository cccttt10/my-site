import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import {
    Button,
    Divider,
    PaddedPageWrapper,
    PageWrapper
} from '../../components/Common';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import styled from '../../lib/styled-components';
import { colors, media, pageWidth, textColor, textSize } from '../../styles/common';
// eslint-disable-next-line no-unused-vars
import { Project as ProjectType } from '../../types/Project';

const Header = styled.div<any>`
    padding: 120px 20px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledPageWrapper = styled(PageWrapper)`
    display: flex;

    ${media.medium`
        flex-direction: column-reverse;
        align-items: center;
    `};
`;

const Title = styled.h1<any>`
    ${textSize.xlarge};
    margin-bottom: 5px;
    color: ${({ textColor }) =>
        textColor === 'light' ? colors.textBodyDark : colors.textBodyLight};
`;

const Subtitle = styled.span<any>`
    font-weight: 300;
    color: ${({ textColor }) =>
        textColor === 'light' ? colors.textBodyDark : colors.textBodyLight};
`;

const Description = styled.p<any>`
    ${textSize.large};
    color: ${({ textColor }) =>
        textColor === 'light' ? colors.textBodyDark : colors.textBodyLight};
`;

const LeftSection = styled.div`
    padding-top: 40px;
    padding-right: 40px;
    max-width: 640px;
    margin-right: auto;

    ${media.medium`
        margin-right: 0;
        padding-right: 0;
        text-align: center;
    `};
`;

const Image = styled(Img)`
    width: 500px;
    max-width: 100%;

    ${media.medium`
        width: 400px;
    `};
`;

const SectionBody = styled(PaddedPageWrapper)`
    ${pageWidth.small};
    margin: auto;
`;

const SectionTitle = styled.h2`
    ${textColor.title};
    ${textSize.xlarge};
    text-align: center;
    margin-bottom: 40px;
`;

const SectionHeading = styled.h3`
    ${textSize.large};
    ${textColor.title};
    margin-top: 60px;
`;

const SectionParagraph = styled.p``;

const SectionImage = styled(Img)`
    margin: 40px auto;
    max-width: 100%;
`;

const SectionDivider = styled(Divider)`
    margin: 80px 0;
`;

const ViewButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;

const ViewButton = styled(Button)`
    margin: auto;
`;

const TwoImages = styled.div`
    display: flex;
`;

type ProjectsProps = {
    data: {
        mdx: ProjectType['node'];
        image1: any;
        image2: any;
        image3: any;
        image4: any;
        image5: any;
        image6: any;
        image7: any;
        image8: any;
        image9: any;
        image10: any;
    };
};

export const Project = ({
    data: {
        mdx: { frontmatter: project },
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10
    }
}: ProjectsProps) => {
    return (
        <Layout title="Robert Cooper | Meat Journal" frontmatter={project}>
            <Header backgroundColor={project.backgroundColor}>
                <StyledPageWrapper>
                    <LeftSection>
                        <Title textColor={project.textColor}>{project.title}</Title>
                        <Subtitle textColor={project.textColor}>
                            {project.subtitle}
                        </Subtitle>
                        <Description textColor={project.textColor}>
                            {project.description}
                        </Description>
                    </LeftSection>
                    <Image fluid={project.image.childImageSharp.fluid} />
                </StyledPageWrapper>
            </Header>
            <SectionBody>
                <SectionTitle>Objective</SectionTitle>
                <SectionParagraph>
                    In the Fall of 2018, I took it upon myself to follow what is
                    known as the{' '}
                    <Link to="https://meat.health/knowledge-base/carnivore-diet-what-to-eat/">
                        Carnivore Diet
                    </Link>
                    , which is a diet that only allows the consumption of meat.
                    Because there is an entire community of people that follow this
                    diet, I decided to create a food tracking application that allows
                    for only meat to be added as food entries. The goal of the
                    application would be to keep a record of food consumption and
                    analyze consumption trends over time.
                </SectionParagraph>
                <SectionDivider />
                <SectionTitle>Design</SectionTitle>
                <SectionParagraph>
                    The goal of the design was for the UI to be simple and
                    uncluttered. Many food tracking apps are often filled with many
                    details and options that make the app clunky to use.
                </SectionParagraph>
                <SectionParagraph>
                    Before begining with a design for the app, other mobile app
                    designs were analyzed for inspiration. Notes were taken regarding
                    specific UI features that were especially attractive and
                    relevant.
                </SectionParagraph>
                <SectionImage fluid={image1.childImageSharp.fluid} />
                <span className="caption">
                    UI inspiration gathered for the Meat Journal app
                </span>
                <SectionParagraph>
                    After gathering notes on the inspiration for the app, rough
                    wireframes were drawn out for the different screens in the app.
                    The wireframes helped to get an idea for what functionality would
                    be available on each screen and how a user would navigate through
                    the app.
                </SectionParagraph>
                <SectionImage fluid={image2.childImageSharp.fluid} />
                <span className="caption">
                    Wireframes for each screen in the app were roughly sketched out
                </span>
                <SectionParagraph>
                    Finally, once the wireframing was completed, mockups of each
                    screen were created. The mockups were built from a
                    commponent-based perspective to help facilate the dev work later
                    on.
                </SectionParagraph>
                <SectionImage fluid={image3.childImageSharp.fluid} />
                <span className="caption">
                    Reusable components used for the mockups
                </span>
                <SectionImage
                    fluid={image4.childImageSharp.fluid}
                    style={{ width: '500px' }}
                />
                <span className="caption">Color palette</span>
                <SectionImage fluid={image5.childImageSharp.fluid} />
                <span className="caption">Final mockups of all app screens</span>
                <SectionDivider />
                <SectionTitle>Result</SectionTitle>
                <SectionHeading>Adding Entries</SectionHeading>
                <SectionParagraph>
                    New meat entries can easily be added through the app and you can
                    specify the name, animal, weight, date, and time for each entry.
                    Each entry is represented as its own line item with an icon that
                    matches the animal chosen for the entry.
                </SectionParagraph>
                <TwoImages>
                    <SectionImage
                        fluid={image6.childImageSharp.fluid}
                        style={{ width: '50%' }}
                    />
                    <SectionImage
                        fluid={image7.childImageSharp.fluid}
                        style={{ width: '50%' }}
                    />
                </TwoImages>
                <span className="caption">
                    Add meat entries and view them in a list view
                </span>
                <SectionHeading>Calendar View</SectionHeading>
                <SectionParagraph>
                    A calendar view is available that allows to more quickly view
                    entries and see all the days where entries have been added.
                </SectionParagraph>
                <SectionImage
                    fluid={image8.childImageSharp.fluid}
                    style={{ width: '400px' }}
                />
                <span className="caption">Calendar view of all entries</span>
                <SectionHeading>Statistics</SectionHeading>
                <SectionParagraph>
                    The statistics view shows a breakdown of the meat consumed on a
                    weekly, monthly, and yearly view. This allows users to have a
                    better idea of their consumption habits and where their
                    preferences lie in terms of the kind of meat they eat.
                </SectionParagraph>
                <SectionImage
                    fluid={image9.childImageSharp.fluid}
                    style={{ width: '400px' }}
                />
                <span className="caption">
                    The statistics view is useful for analyzing consumption habits
                </span>
                <SectionDivider />
                <SectionImage
                    fluid={image10.childImageSharp.fluid}
                    style={{ width: '400px' }}
                />
                <ViewButtonWrapper>
                    <ViewButton to="https://itunes.apple.com/us/app/meatjournal-carnivore-diet/id1438311847">
                        View the app
                    </ViewButton>
                </ViewButtonWrapper>
            </SectionBody>
        </Layout>
    );
};

export default Project;

export const pageQuery = graphql`
    query {
        mdx(frontmatter: { title: { eq: "Meat Journal" } }) {
            frontmatter {
                title
                subtitle
                description
                backgroundColor
                textColor
                image {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                banner {
                    publicURL
                }
            }
        }
        image1: file(
            name: { eq: "image-1" }
            relativePath: { regex: "/meat-journal/images/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image2: file(
            name: { eq: "image-2" }
            relativePath: { regex: "/meat-journal/images/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image3: file(
            name: { eq: "image-3" }
            relativePath: { regex: "/meat-journal/images/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image4: file(
            name: { eq: "image-4" }
            relativePath: { regex: "/meat-journal/images/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image5: file(
            name: { eq: "image-5" }
            relativePath: { regex: "/meat-journal/images/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image6: file(
            name: { eq: "image-6" }
            relativePath: { regex: "/meat-journal/images/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image7: file(
            name: { eq: "image-7" }
            relativePath: { regex: "/meat-journal/images/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image8: file(
            name: { eq: "image-8" }
            relativePath: { regex: "/meat-journal/images/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image9: file(
            name: { eq: "image-9" }
            relativePath: { regex: "/meat-journal/images/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        image10: file(
            name: { eq: "image-10" }
            relativePath: { regex: "/meat-journal/images/" }
        ) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
