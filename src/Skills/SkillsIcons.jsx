import React, { useState } from 'react';
import './SkillsIcons.css';
import Modal from './Modal'; // Import your Modal component

import { FaPython, FaRProject, FaAws } from 'react-icons/fa';
import {
    SiPandas, SiPlotly, SiPowerbi, SiTableau, SiMicrosoftexcel,
    SiMysql, SiScikitlearn, SiTensorflow, SiPytorch, SiOpencv,
    SiFastapi, SiMicrosoftazure, SiGooglecloud,
    SiOpenai, SiHtml5, SiCss3, SiJavascript, SiReact,
    SiDocker, SiFolium} from 'react-icons/si';


const SkillModal = ({ isVisible, onClose, title, description }) => {
    return (
        isVisible &&
        <Modal onClose={onClose}>
            <h2>{title}</h2>
            <p>{description}</p>
        </Modal>
    );
};

export const PythonIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);


    return (
        <div className="skill-icon" id="icon-python">
            <FaPython onClick={toggleModal} className='icon-svg'></FaPython>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Python"
                description="Advanced Data Wrangling with Numpy, Pandas and Geopandas. Advanced and appealing visualizations with Matplotlib, Seaborn and Plotly. Advanced Web Development with Dash and Streamlit. Advanced Machine Learning (Classification, Regression and Clustering) with Scikit-learn and TensorFlow. Creation of API's with FastAPI"
            />
        </div>
    );
};

export const PandasIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);


    return (
        <div className="skill-icon" id="icon-pandas">
            <SiPandas onClick={toggleModal} className='icon-svg'></SiPandas>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Pandas"
                description="Advanced used of Pandas for data manipulation and analysis."
            />

        </div>
    );
};

export const PlotlyIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-plotly">
            <SiPlotly onClick={toggleModal} className='icon-svg'></SiPlotly>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Plotly"
                description="Advanced interactive data visualization from basic charts such as bar, line, scatter, pie, to advanced charts such as choropleth, heatmap, 3D plots, and more. Creation of dahsboards with Dash"
            />

        </div>

    );
};

export const FoliumIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-folium">
            <SiFolium onClick={toggleModal} className='icon-svg'></SiFolium>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Folium"
                description="Advanced use of Folium for interactive maps. Creation of heatmaps, choropleth maps, and more."
            />
        </div>

    );
};

export const RIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-r">
            <FaRProject onClick={toggleModal} className='icon-svg'></FaRProject>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="R"
                description="Advanced data manipulation and analysis with dplyr and ggplot2. Advanced data visualization with ggplot2. Creation of dashboards with Shiny."
            />

        </div>
    );
};

export const SasIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-sas"><svg
            onClick={toggleModal}
            xmlns="http://www.w3.org/2000/svg"
            className='icon-svg'
            width="64" height="64"
            viewBox="0 0 8.078 8.087"><path
                d="M4.158.001c-.28-.006-.567.026-.862.1-1.364.34-2.89 2.096-1.224 4.12l.995 1.205.28.343c.19.224.497.22.724.033s.293-.496.105-.724l-.114-.138h.005l-.162-.2-.77-.933c-.724-.88-.4-1.964.58-2.58.865-.543 2.453-.35 3 .543C6.37.76 5.366.028 4.158.001zm.2 2.124a.57.57 0 0 0-.376.138c-.228.188-.292.496-.105.724a7.91 7.91 0 0 0 .062.076l1.005 1.214c.724.88.4 1.96-.58 2.576-.865.543-2.453.35-3-.543.424 1.252 1.846 2.07 3.42 1.676 1.365-.34 2.89-2.09 1.224-4.115l-1.167-1.4-.133-.167a.47.47 0 0 0-.348-.171z" /></svg>

            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="SAS"
                description="Advanced data manipulation and analysis with SAS Programming. Advanced data visualization with SAS Visual Analytics. Creation of models with SAS Viya."
            />

        </div>
    );
};

export const PowerBiIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-powerbi">
            <SiPowerbi onClick={toggleModal} className='icon-svg'></SiPowerbi>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Power BI"
                description="Creation of dashboards and reports with Power BI. Advanced data visualization with Power BI."
            />

        </div>

    );
};

export const TableuIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-tableau">
            <SiTableau onClick={toggleModal} className='icon-svg'></SiTableau>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Tableau"
                description="Creation of dashboards and reports with Tableau. Advanced data visualization with Tableau."
            />

        </div>

    );
};

export const ExcelIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-excel">
            <SiMicrosoftexcel onClick={toggleModal} className='icon-svg'></SiMicrosoftexcel>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Excel"
                description="Advanced data manipulation and analysis with Excel. Use of pivot tables, and experience with Macros and VBA. Creation of dashboards and reports with Excel."
            />

        </div>

    );
};

export const SqlIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-sql">
            <SiMysql onClick={toggleModal} className='icon-svg'></SiMysql>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="SQL"
                description="Advanced use of SQL of different databases such as MySQL, PostgreSQL, and SQL Server. Experience with Data Query (DQL), Data Manipulation (DML), and Data Definition (DDL)."
            />

        </div>

    );
};

export const ScikitIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-scikitlearn">
            <SiScikitlearn onClick={toggleModal} className='icon-svg'></SiScikitlearn>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="SciKit-Learn"
                description="Advanced use of regression techniques. Advanced use of classification techniques. Advanced use of clustering techniques. Advanced use of dimensionality reduction techniques."
            />

        </div>

    );
};

export const TensorFlowIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-tensorflow">
            <SiTensorflow onClick={toggleModal} className='icon-svg'></SiTensorflow>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Tensorflow"
                description="Experience with Convolutional Neural Networks (CNN). Experience with Recurrent Neural Networks (RNN). Experience with Long Short-Term Memory (LSTM)."
            />

        </div>
    );
};

export const PytorchIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-torch">
            <SiPytorch onClick={toggleModal} className='icon-svg'></SiPytorch>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="PyTorch"
                description="Experience with Convolutional Neural Networks (CNN). Experience with Recurrent Neural Networks (RNN). Experience with Long Short-Term Memory (LSTM)."
            />

        </div>

    );
};

export const OpenCVIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-opencv">
            <SiOpencv onClick={toggleModal} className='icon-svg'></SiOpencv>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="OpenCV"
                description="Advanced use of image processing techniques. Advanced use of video processing techniques. Advanced use of object detection techniques."
            />

        </div>

    );
};

export const HuggingFaceIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-huggingface"><svg
            className='icon-svg'
            onClick={toggleModal}
            xmlns="http://www.w3.org/2000/svg" width="256"
            height="256" viewBox="30 30 200 200" fill="none">
            <path
                d="M230.721 172.7C230.183 170.673 229.313 168.75 228.146 167.008C228.396 166.091 228.587 165.159 228.714 164.217C229.543 158.241 227.471 152.77 223.567 148.537C221.452 146.225 219.185 144.698 216.784 143.761C218.36 137.018 219.157 130.117 219.161 123.193C219.161 120.03 218.982 116.932 218.682 113.88C218.526 112.356 218.337 110.836 218.115 109.32C217.428 104.847 216.408 100.431 215.064 96.11C214.183 93.2707 213.164 90.476 212.01 87.736C210.281 83.6782 208.262 79.75 205.969 75.982C204.465 73.475 202.827 71.0508 201.062 68.72C200.197 67.543 199.296 66.3938 198.358 65.274C195.58 61.898 192.561 58.7277 189.325 55.788C188.25 54.7997 187.145 53.8453 186.01 52.926C184.893 51.9943 183.751 51.0927 182.586 50.222C180.241 48.4766 177.818 46.8392 175.324 45.315C161.543 36.945 145.382 32.145 128.109 32.145C77.817 32.145 37.057 72.907 37.057 123.196C37.055 130.208 37.867 137.196 39.477 144.02C37.317 144.958 35.247 146.42 33.327 148.535C29.424 152.766 27.351 158.217 28.18 164.193C28.306 165.142 28.495 166.082 28.747 167.006C27.5811 168.749 26.7117 170.673 26.174 172.7C24.974 177.261 25.369 181.374 26.894 184.978C25.236 189.688 25.65 194.704 27.809 199.065C29.379 202.25 31.626 204.714 34.396 206.916C37.689 209.534 41.811 211.758 46.783 213.892C52.715 216.422 59.956 218.799 63.249 219.671C71.755 221.873 79.911 223.269 88.177 223.337C99.954 223.446 110.096 220.677 117.357 213.59C120.924 214.027 124.515 214.246 128.109 214.244C131.906 214.236 135.699 213.997 139.467 213.529C146.711 220.661 156.892 223.455 168.712 223.343C176.977 223.277 185.133 221.881 193.617 219.676C196.932 218.804 204.17 216.427 210.105 213.897C215.077 211.76 219.199 209.536 222.514 206.922C225.263 204.719 227.508 202.256 229.079 199.071C231.26 194.709 231.652 189.693 230.017 184.983C231.527 181.379 231.92 177.257 230.721 172.7ZM222.281 184.673C223.952 187.844 224.059 191.427 222.585 194.764C220.349 199.821 214.795 203.805 204.008 208.082C197.3 210.742 191.158 212.443 191.104 212.458C182.232 214.759 174.208 215.928 167.262 215.928C155.76 215.928 147.201 212.754 141.773 206.486C132.594 208.05 123.222 208.103 114.026 206.644C108.591 212.808 100.081 215.928 88.676 215.928C81.729 215.928 73.706 214.759 64.833 212.458C64.779 212.443 58.639 210.742 51.929 208.082C41.143 203.805 35.587 199.824 33.352 194.764C31.878 191.427 31.985 187.844 33.656 184.673C33.81 184.378 33.976 184.091 34.153 183.813C33.1516 182.309 32.4799 180.61 32.182 178.827C31.8842 177.045 31.967 175.22 32.425 173.472C33.089 170.949 34.46 168.851 36.322 167.344C35.425 165.87 34.8365 164.23 34.592 162.522C34.056 158.808 35.289 155.1 38.062 152.076C40.222 149.723 43.275 148.428 46.655 148.428H46.745C44.1965 140.259 42.9044 131.75 42.913 123.193C42.913 76.522 80.749 38.683 127.427 38.683C174.104 38.683 211.94 76.518 211.94 123.193C211.947 131.773 210.646 140.304 208.081 148.492C208.489 148.452 208.889 148.432 209.282 148.431C212.662 148.431 215.716 149.726 217.874 152.079C220.647 155.1 221.881 158.811 221.344 162.525C221.1 164.233 220.511 165.873 219.615 167.347C221.477 168.854 222.849 170.952 223.512 173.475C223.97 175.223 224.053 177.048 223.755 178.831C223.458 180.613 222.786 182.312 221.784 183.816C221.961 184.091 222.129 184.378 222.281 184.673Z"
            />

            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M203.21 123.685V123.194C203.21 81.34 169.292 47.411 127.435 47.411C85.5791 47.411 51.648 81.342 51.648 123.194V123.358C51.646 123.467 51.645 123.576 51.648 123.685C51.6529 123.848 51.6546 124.011 51.653 124.174L51.6581 124.534L51.661 124.663C51.661 124.723 51.6631 124.782 51.6651 124.842C51.6681 124.937 51.67 125.033 51.67 125.128L51.681 125.517L51.697 125.974L51.702 126.124L51.722 126.597V126.62C51.73 126.805 51.7401 126.989 51.7491 127.173L51.75 127.187C51.76 127.375 51.7701 127.564 51.7821 127.753C51.7921 127.927 51.802 128.101 51.815 128.275L51.8171 128.306C51.8258 128.455 51.8358 128.605 51.847 128.754L51.85 128.794L51.883 129.226L51.8861 129.254C51.8921 129.338 51.898 129.422 51.906 129.503C51.9658 130.224 52.0355 130.945 52.1151 131.664L52.12 131.709L52.181 132.238L52.2491 132.793L52.299 133.17L52.322 133.347C52.3753 133.755 52.433 134.162 52.495 134.568L52.4991 134.595L52.558 134.979C52.8435 136.808 53.1971 138.626 53.618 140.429L53.6231 140.451L53.655 140.586L53.746 140.971L53.802 140.904C56.002 138.274 59.158 136.824 62.689 136.824C65.519 136.824 68.4221 137.76 71.3321 139.605C73.2621 140.831 75.3961 143.002 77.5921 145.733C79.6241 142.911 82.4721 141.035 85.7301 140.523C86.3513 140.425 86.9792 140.376 87.6081 140.375C95.0441 140.375 99.523 146.828 101.215 152.633C102.051 154.594 106.08 163.526 112.156 169.568C121.392 178.795 123.703 188.316 119.132 198.511H119.148C119.459 198.546 119.772 198.578 120.087 198.607C120.274 198.625 120.46 198.643 120.648 198.659L120.714 198.665L121.127 198.7L121.507 198.73C121.869 198.758 122.232 198.784 122.596 198.807L122.885 198.824L123.114 198.838L123.256 198.846L123.703 198.869L123.825 198.874L124.294 198.895L124.816 198.915L125.235 198.927L125.305 198.929C125.394 198.933 125.483 198.936 125.572 198.936L125.668 198.939C126.258 198.953 126.847 198.96 127.437 198.959H128.063L128.51 198.954C128.62 198.949 128.729 198.949 128.84 198.949H129.014L129.165 198.945C129.224 198.943 129.283 198.941 129.343 198.941H129.522L129.873 198.932L130.401 198.914L130.982 198.888C131.15 198.882 131.316 198.873 131.482 198.865L131.661 198.854L131.927 198.84L132.083 198.831L132.201 198.823L132.738 198.788L133.274 198.749L133.761 198.71L134.103 198.681L134.479 198.647C135.107 198.591 135.733 198.525 136.359 198.45L136.786 198.399C132.287 188.247 134.616 178.767 143.813 169.577C149.876 163.519 153.905 154.587 154.745 152.625C156.438 146.821 160.914 140.368 168.352 140.368C168.981 140.368 169.61 140.418 170.231 140.516C173.486 141.028 176.334 142.904 178.369 145.726C180.566 142.996 182.699 140.823 184.63 139.597C187.539 137.753 190.445 136.817 193.272 136.817C196.388 136.817 199.212 137.947 201.345 140.02C201.384 139.851 201.422 139.682 201.459 139.512L201.568 139.006C201.607 138.821 201.646 138.636 201.683 138.451C201.749 138.124 201.815 137.797 201.878 137.467C201.944 137.125 202.007 136.781 202.067 136.437L202.098 136.251C202.117 136.141 202.135 136.031 202.156 135.92C202.19 135.748 202.218 135.576 202.246 135.402L202.257 135.336L202.328 134.883L202.398 134.424V134.42C202.449 134.081 202.497 133.742 202.542 133.403L202.553 133.319L202.616 132.841L202.667 132.433L202.757 131.629L202.792 131.306L202.801 131.218C202.82 131.044 202.838 130.87 202.854 130.696V130.682C202.867 130.544 202.881 130.405 202.893 130.266C202.964 129.478 203.024 128.686 203.072 127.891C203.081 127.761 203.088 127.63 203.096 127.499V127.493L203.122 127.002L203.128 126.892C203.144 126.56 203.158 126.228 203.169 125.896V125.884L203.174 125.754C203.179 125.645 203.183 125.535 203.183 125.425L203.185 125.381C203.189 125.278 203.193 125.172 203.193 125.067L203.196 124.977C203.199 124.872 203.202 124.768 203.202 124.663L203.204 124.574C203.207 124.441 203.21 124.307 203.21 124.174V123.685ZM108.638 199.391C114.64 190.59 114.214 183.984 105.98 175.754C97.7441 167.523 92.951 155.487 92.951 155.487C92.951 155.487 91.1621 148.496 87.0821 149.138C83.0021 149.78 80.0091 160.227 88.5521 166.622C97.0941 173.017 86.8521 177.353 83.5641 171.352C80.2761 165.35 71.299 149.923 66.645 146.972C61.991 144.021 58.718 145.675 59.815 151.757C60.36 154.776 65.4281 159.929 70.1631 164.743C74.9671 169.627 79.428 174.163 78.474 175.768C76.581 178.955 69.9141 172.023 69.9141 172.023C69.9141 172.023 49.038 153.025 44.494 157.976C40.304 162.539 46.765 166.418 56.7211 172.397C57.5671 172.905 58.4391 173.429 59.3321 173.969C70.7231 180.865 71.609 182.684 69.992 185.293C69.395 186.257 65.582 183.968 60.892 181.153C52.897 176.352 42.3551 170.023 40.8661 175.688C39.5781 180.591 47.334 183.595 54.368 186.32C60.228 188.59 65.5881 190.666 64.7991 193.484C63.9821 196.406 59.5531 193.969 54.7121 191.305C49.2771 188.314 43.3221 185.038 41.3731 188.735C37.6901 195.725 66.7831 203.954 67.0231 204.015C76.4231 206.453 100.295 211.619 108.638 199.391ZM147.303 199.391C141.301 190.59 141.727 183.984 149.962 175.754C158.197 167.523 162.99 155.487 162.99 155.487C162.99 155.487 164.779 148.496 168.859 149.138C172.939 149.78 175.932 160.227 167.39 166.622C158.847 173.017 169.089 177.353 172.377 171.352C175.666 165.35 184.637 149.923 189.291 146.972C193.945 144.021 197.22 145.675 196.122 151.757C195.578 154.776 190.509 159.929 185.774 164.744C180.97 169.628 176.509 174.163 177.462 175.768C179.355 178.955 186.027 172.019 186.027 172.019C186.027 172.019 206.902 153.022 211.448 157.973C215.637 162.535 209.176 166.415 199.219 172.394C198.348 172.917 197.478 173.441 196.609 173.966C185.218 180.862 184.332 182.681 185.948 185.289C186.546 186.254 190.359 183.964 195.048 181.149C203.044 176.349 213.586 170.019 215.075 175.685C216.364 180.588 208.607 183.592 201.573 186.317C195.713 188.587 190.353 190.663 191.141 193.481C191.957 196.402 196.385 193.965 201.225 191.301C206.66 188.31 212.616 185.032 214.564 188.732C218.248 195.726 189.15 203.947 188.915 204.007C179.515 206.453 155.643 211.619 147.303 199.391Z"
            />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M152.047 102.567C153.229 102.985 154.108 104.257 154.944 105.468C156.074 107.104 157.126 108.627 158.74 107.769C160.644 106.756 162.205 105.202 163.225 103.302C164.246 101.402 164.681 99.2427 164.475 97.096C164.321 95.4908 163.813 93.9398 162.987 92.5548C162.161 91.1697 161.038 89.985 159.7 89.0862C158.361 88.1874 156.839 87.5968 155.245 87.3569C153.65 87.117 152.022 87.2339 150.478 87.699C148.934 88.1639 147.513 88.9653 146.316 90.0455C145.119 91.1257 144.176 92.4578 143.556 93.946C142.936 95.4342 142.653 97.0415 142.728 98.652C142.804 100.263 143.235 101.836 143.992 103.26C144.74 104.667 146.4 104.003 148.152 103.302C149.525 102.753 150.956 102.181 152.047 102.567ZM100.672 102.567C99.49 102.985 98.611 104.258 97.775 105.468C96.645 107.105 95.592 108.627 93.979 107.769C91.5845 106.501 89.7482 104.386 88.8278 101.838C87.9075 99.2895 87.9692 96.4896 89.0008 93.9841C90.0324 91.4786 91.9601 89.4471 94.408 88.2855C96.856 87.1239 99.6488 86.9156 102.242 87.701C104.307 88.3228 106.141 89.5427 107.513 91.2065C108.885 92.8704 109.732 94.9035 109.949 97.049C110.165 99.1945 109.74 101.356 108.728 103.26C107.979 104.667 106.319 104.003 104.567 103.303C103.193 102.753 101.764 102.181 100.672 102.567ZM144.099 149.318C152.242 142.903 155.233 132.429 155.233 125.977C155.233 120.877 151.802 122.482 146.309 125.202L145.999 125.355C140.957 127.852 134.245 131.177 126.877 131.177C119.508 131.177 112.796 127.852 107.755 125.354C102.084 122.545 98.527 120.783 98.527 125.978C98.527 132.634 101.709 143.563 110.443 149.912C111.596 147.573 113.219 145.497 115.211 143.813C117.202 142.129 119.52 140.874 122.018 140.126C122.89 139.866 123.788 141.367 124.707 142.904C125.594 144.386 126.501 145.902 127.423 145.902C128.406 145.902 129.371 144.408 130.314 142.95C131.299 141.425 132.26 139.94 133.189 140.237C137.864 141.738 141.775 144.993 144.099 149.318Z"
                fill="whitesmoke" />
            <path
                d="M144.097 149.317C139.856 152.659 134.219 154.9 126.878 154.9C119.981 154.9 114.587 152.922 110.443 149.911C111.596 147.572 113.219 145.495 115.211 143.812C117.202 142.128 119.52 140.873 122.018 140.125C123.73 139.614 125.545 145.901 127.423 145.901C129.433 145.901 131.37 139.655 133.189 140.236C137.863 141.738 141.773 144.993 144.097 149.317Z"
                fill="whitesmoke" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M81.2 111.64C80.2312 112.288 79.1173 112.687 77.9572 112.801C76.7971 112.916 75.6267 112.742 74.55 112.295C73.6893 111.94 72.9072 111.418 72.2488 110.759C71.5903 110.101 71.0684 109.319 70.713 108.458C70.267 107.381 70.0935 106.211 70.2082 105.051C70.3228 103.891 70.7219 102.777 71.37 101.808C72.1488 100.642 73.2558 99.7333 74.5512 99.1967C75.8466 98.6601 77.272 98.5197 78.6471 98.7935C80.0223 99.0672 81.2853 99.7427 82.2764 100.734C83.2675 101.726 83.9422 102.99 84.215 104.365C84.4883 105.74 84.3477 107.165 83.8113 108.46C83.2748 109.755 82.3654 110.861 81.2 111.64ZM182.613 111.64C181.644 112.288 180.53 112.687 179.37 112.801C178.209 112.916 177.039 112.742 175.962 112.295C175.101 111.939 174.319 111.418 173.661 110.759C173.003 110.101 172.481 109.319 172.125 108.458C171.68 107.381 171.507 106.211 171.621 105.051C171.736 103.891 172.135 102.777 172.782 101.808C173.364 100.936 174.133 100.205 175.032 99.6658C175.931 99.1269 176.938 98.7942 177.981 98.6917C179.025 98.5891 180.078 98.7193 181.064 99.0728C182.051 99.4264 182.947 99.9944 183.688 100.736C184.68 101.727 185.355 102.99 185.628 104.365C185.902 105.74 185.761 107.165 185.224 108.46C184.687 109.755 183.779 110.861 182.613 111.64Z"
                fill="whitesmoke" />
        </svg>

            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Hugging Face Transformers"
                description="Advanced use of Hugging Face Transformers for NLP tasks, such as text generation, text classification, and text summarization."
            />

        </div>
    );
};

export const FastAPIIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-fastapi">
            <SiFastapi onClick={toggleModal} className='icon-svg'></SiFastapi>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Fast API"
                description="Advanced development and deployment of APIs using FastAPI."
            />

        </div>
    );
};

export const AwsIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-aws">
            <FaAws onClick={toggleModal} className='icon-svg'></FaAws>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="AWS"
                description="Experience with usage of Amazon Web Services for cloud computing, storage, and machine learning services."
            />

        </div>
    );
};

export const AzureIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-azure">
            <SiMicrosoftazure onClick={toggleModal} className='icon-svg'></SiMicrosoftazure>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Pandas"
                description="Experience with usage of Microsoft Azure for cloud computing, storage, and machine learning services. Advanced use of Azure Synapse Analytics."
            />

        </div>
    );
};

export const GCPIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-gcp">
            <SiGooglecloud onClick={toggleModal} className='icon-svg'></SiGooglecloud>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Google Cloud Computing"
                description="Experience with usage of Google Cloud Platform for cloud computing, storage, and machine learning services."
            />

        </div>
    );
};

export const DockerIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-docker">
            <SiDocker onClick={toggleModal} className='icon-svg'></SiDocker>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Docker"
                description="Experience with containerization and deployment of applications using Docker."
            />

        </div>
    );
};

export const OpenAiIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-openai">
            <SiOpenai onClick={toggleModal} className='icon-svg'></SiOpenai>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="Open AI"
                description="Experience with usage of OpenAI's GPT-3 API for text generation and other NLP tasks."
            />

        </div>
    );
};

export const htmlIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-html">
            <SiHtml5 onClick={toggleModal} className='icon-svg'></SiHtml5>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="HTML"
                description="Advanced use of HTML for web development and design."
            />

        </div>
    );
};

export const cssIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-css">
            <SiCss3 onClick={toggleModal} className='icon-svg'></SiCss3>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="CSS"
                description="Advanced use of CSS for web development and design. Experience with CSS frameworks such as Bootstrap."
            />

        </div>
    );
};

export const jsIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-javascript">
            <SiJavascript onClick={toggleModal} className='icon-svg'></SiJavascript>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="JavaScript"
                description="Advanced use of JavaScript for web development and design. Experience with JavaScript frameworks such as React."
            />

        </div>
    );
};

export const ReactIcon = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    return (
        <div className="skill-icon" id="icon-react">
            <SiReact onClick={toggleModal} className='icon-svg'></SiReact>
            <SkillModal
                isVisible={modalVisible}
                onClose={toggleModal}
                title="React"
                description="Experience with React for building interactive user interfaces, single-page applications, and multi-page applications."
            />

        </div>
    );
};
