import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import resume from '../Resume.pdf';
import NavLinks from '../components/NavLinks';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    console.log(resume);
    let links = [
        { name: 'Home', href: '/' },
        { name: 'Info', href: '/info' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className="resume-page">
            <NavLinks links={links} />
            <div className="resume-container">
                {<Document/> ? (
                    <Document 
                        file={ resume } 
                        onLoadError={console.error}
                        style={{ width: '100vw', height: 'auto' }}
                    > 
                        <Page 
                            pageNumber={1}
                            pageIndex={0} 
                            renderTextLayer={false}
                        />
                    </Document>
                ) : (
                    <a href={resume}>Download</a>
                )}
            </div>
        </div>
    );
};

export default Resume;