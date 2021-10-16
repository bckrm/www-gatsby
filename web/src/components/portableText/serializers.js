/* eslint-disable import/no-cycle */
import BasicImage from '../case-studies/BasicImage';
import CaseStudyContent from '../case-studies/CaseStudyContent';
import Description from '../case-studies/description';
import FeatureItem from '../lps/featureItem';
import FullBleedImg from '../case-studies/FullBleedImg';
import FullWidthImage from '../case-studies/fullWidthImage';
import FullWidthVideo from '../case-studies/fullWidthVideo';
import ImageCol2 from '../case-studies/imageCol2';
import ImageGridTallImageLeft from '../case-studies/imageGridTallImageLeft';
import TwoColWithVideo from '../case-studies/2colWithVideo';
import TwoColumnLargeImageRight from '../case-studies/2ColLargeImageRight';
import Video from '../case-studies/video';

export default {
    types: {
        // sanityObjectName: reactComponentName,
        caseStudyFullBleedImage: FullBleedImg,
        caseStudyFeaturedImage: BasicImage,
        caseStudyTextBlock: CaseStudyContent,
        description: Description,
        fullWidthImage: FullWidthImage,
        fullWidthVideo: FullWidthVideo,
        imageCol2: ImageCol2,
        imageGridTallLeft: ImageGridTallImageLeft,
        lpFeatures: FeatureItem,
        twoColLargeRightImage: TwoColumnLargeImageRight,
        twoColWithVideo: TwoColWithVideo,
        video: Video,

        // caseStudyTextBlock: CopyBlock,
        // caseStudyFeaturedImage: ({ node }) => <pre>{JSON.stringify(node, null, 2)}</pre>,
        // caseStudyTextBlock: ({ node }) => <pre>{JSON.stringify(node, null, 2)}</pre>
    },
};
