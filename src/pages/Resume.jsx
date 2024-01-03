import { Document, Page } from 'react-pdf';
import resume from '../Resume.pdf';

const Resume = () => {
    return (
        <Document 
            file={ resume } 
            onLoadError={console.error}
            style={{ width: '100vw', height: 'auto' }}
        > 
            <Page pageIndex={0} />
        </Document>
    );
};

export default Resume;