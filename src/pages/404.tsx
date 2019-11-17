import React from 'react';

import { PaddedPageWrapper } from '../components/Common';
import Layout from '../components/Layout';
import { Title } from '../components/Typography';

export const PageNotFound = () => (
    <Layout>
        <PaddedPageWrapper>
            <Title>Page Not Found</Title>
        </PaddedPageWrapper>
    </Layout>
);

export default PageNotFound;
