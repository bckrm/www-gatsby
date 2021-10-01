/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document types
import caseStudy from './documents/caseStudy';
import caseStudyPreview from './documents/caseStudyPreview';
import homepagehero from './documents/homepageHero';
import indexPage from './documents/indexPage';
import infoPage from './documents/infoPage';
import landingPage from './documents/landingPage';
import post from './documents/post';
import service from './documents/service';
import team from './documents/team';
import workIndexPage from './documents/workIndexPage';

// object types
import caseStudyFullBleedImage from './objects/caseStudyFullBleedImage';
import caseStudyBodyPortableText from './objects/caseStudyBodyPortableText';
import caseStudyFeaturedImage from './objects/caseStudyFeaturedImage';
import caseStudyTextBlock from './objects/caseStudyTextBlock';
import description from './objects/case-study/description';
import featuredContent from './objects/case-study/featuredContent';
import fullWidthImage from './objects/case-study/fullWidthImage';
import fullWidthVideo from './objects/case-study/fullWidthVideo';
import imageCol2 from './objects/case-study/imageCol2';
import imageGridTallLeft from './objects/case-study/imageGridTallLeft';
import imageObj from './objects/image';
import logo from './objects/logo';
import lpClients from './objects/landingPage/clients';
import lpFeatures from './objects/landingPage/features';
import lpForm from './objects/landingPage/form';
import lpHero from './objects/landingPage/hero';
import quote from './objects/quote';
import twoColLargeRightImage from './objects/case-study/2colLgRightImage';
import twoColWithVideo from './objects/case-study/2colWithVideo';
import video from './objects/case-study/video';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        caseStudy,
        caseStudyFullBleedImage,
        caseStudyBodyPortableText,
        caseStudyFeaturedImage,
        caseStudyPreview,
        caseStudyTextBlock,
        homepagehero,
        indexPage,
        infoPage,
        landingPage,
        post,
        service,
        team,
        workIndexPage,

        // objects
        description,
        featuredContent,
        fullWidthImage,
        fullWidthVideo,
        imageCol2,
        imageGridTallLeft,
        imageObj,
        logo,
        lpClients,
        lpFeatures,
        lpForm,
        lpHero,
        quote,
        twoColLargeRightImage,
        twoColWithVideo,
        video,
    ]),
});
