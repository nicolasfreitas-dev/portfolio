import htmlImg from './../assets/html-5-svgrepo-com.svg';
import cssImg from './../assets/css-3-svgrepo-com.svg';
import javascriptImg from './../assets/js-svgrepo-com.svg';
import gitImg from './../assets/git-svgrepo-com.svg';
import reactImg from './../assets/react-1-logo-svgrepo-com.svg';
import tailwindcssImg from './../assets/tailwind-svgrepo-com.svg';
import typescriptImg from './../assets/typescript-icon-svgrepo-com.svg';
import sassImg from './../assets/sass-svgrepo-com.svg';

export function Skills() {
    <section>
        <h2>
            Tecnologias<span>.</span>
        </h2>
        <div>
            <div>
                <img src={htmlImg} alt="" />
                <span>HTML 5</span>
            </div>
            <div>
                <img src={cssImg} alt="" />
                <span>CSS 3</span>
            </div>
            <div>
                <img src={javascriptImg} alt="" />
                <span>Javascript</span>
            </div>
            <div>
                <img src={gitImg} alt="" />
                <span>GIT</span>
            </div>
            <div>
                <img src={reactImg} alt="" />
                <span>React</span>
            </div>
            <div>
                <img src={tailwindcssImg} alt="" />
                <span>Tailwindcss</span>
            </div>
            <div>
                <img src={typescriptImg} alt="" />
                <span>Typescript</span>
            </div>
            <div>
                <img src={sassImg} alt="" />
                <span>Sass</span>
            </div>
        </div>
    </section>;
}
