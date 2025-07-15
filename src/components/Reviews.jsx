import { useEffect } from "react";

export default function Reviews() {
    useEffect(() => {
        // Dynamically load the EmbedSocial script
        if (!document.getElementById("EmbedSocialHashtagScript")) {
            const script = document.createElement("script");
            script.id = "EmbedSocialHashtagScript";
            script.src = "https://embedsocial.com/cdn/ht.js";
            document.head.appendChild(script);
        }
    }, []);

    return (
        <div>
            <div className="items-center justify-center flex flex-col mt-10 mb-14">
                <p className="text-[#E9C664] text-2xl" style={{ fontFamily: "Inter, serif" }}>WHAT PEOPLE SAY</p>
                <h1 className="text-black font-{abril} text-5xl text-center" style={{ fontFamily: "Abril Fatface, serif" }}>
                 CLIENTS REVIEWS
                </h1>
                <div className="mt-4 pl-5">
                    <div className="embedsocial-hashtag" data-ref="bd1a7c71acd36f2cf331d1f69dd7ef4b5e7e619e">
                        <a className="feed-powered-by-es feed-powered-by-es-badge-img es-widget-branding" href="https://embedsocial.com/blog/embed-google-reviews/" target="_blank" rel="noopener noreferrer" title="Embed Google reviews">
                            <img src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" alt="EmbedSocial" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}