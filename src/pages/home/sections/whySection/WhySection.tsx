import "./WhySection.css";

const WhySection = () => {
    return (
        <div className="page">
            <div className="whySection">
                <h1 className="whyTitle">
                Why you should <br/>
                join ACM?
                </h1>
                <div className="robPic">
                        <div className="chatBox chat-1">
                            Is this just another student club?
                        </div>
                        <div className="chatBox chat-2">
                            What do I actually gain from joining?
                        </div>
                        <div className="chatBox chat-3">
                            Will this help me beyond exams?
                        </div>
                        <div className="chatBox chat-4">
                            Is this worth my time?
                        </div>
                </div>
                <p className="whyText">
                There are many reasons to join ACM. Enhance your professional career or academic life with ACM member benefits that include a free subscription to ACM’s flagship publication Communications of the ACM; online books, courses, videos, and webinars through the ACM Learning Center; opportunities to participate in Special Interest Groups, and conferences all over the world; optional discounted subscription to the ACM Digital Library; savings on peer-driven specialty magazines and research journals, plus other exclusive member discounts.
                </p>

            </div>
        </div>
        
    );
  };
  
  export default WhySection;
  