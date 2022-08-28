import Navbar from "../navbar/Navbar";
import Dino1 from "./img/dinov.jpg"
import "./Landing.css"

export default function Landing() {
  return (
    <div className="home">
      <Navbar />
      <div className="landing__container">
      <div className="landing__target">
        <p>Do you love dinosaurs?
I invite you to discover more</p>
        <ul className="landing__socialMedia">
          <li>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.46 4.41C14.2774 4.41 4.41001 14.2774 4.41001 26.46C4.40751 31.0889 5.86269 35.6011 8.56911 39.3563C11.2755 43.1116 15.0958 45.9193 19.4878 47.381C20.5903 47.5729 21.0026 46.9114 21.0026 46.3315C21.0026 45.8089 20.974 44.0735 20.974 42.2258C15.435 43.2467 14.0018 40.8763 13.5608 39.6349C13.3116 38.9998 12.2378 37.044 11.3006 36.5192C10.5289 36.1069 9.42638 35.086 11.272 35.0595C13.0095 35.0308 14.2487 36.6581 14.6633 37.3196C16.6478 40.6536 19.8185 39.7165 21.0842 39.1388C21.2783 37.7055 21.856 36.7419 22.491 36.1907C17.5849 35.6394 12.4583 33.7365 12.4583 25.3024C12.4583 22.9033 13.3116 20.921 14.7184 19.3753C14.4979 18.8241 13.7261 16.564 14.9389 13.5321C14.9389 13.5321 16.7845 12.9544 21.0026 15.7944C22.7976 15.2962 24.6523 15.0455 26.5151 15.0491C28.3894 15.0491 30.2636 15.2961 32.0276 15.7922C36.2436 12.9257 38.0914 13.5343 38.0914 13.5343C39.3041 16.5662 38.5324 18.8263 38.3119 19.3775C39.7165 20.921 40.572 22.8769 40.572 25.3024C40.572 33.7652 35.4189 35.6394 30.5128 36.1907C31.311 36.8786 32.0012 38.2016 32.0012 40.2699C32.0012 43.218 31.9725 45.5884 31.9725 46.3337C31.9725 46.9114 32.387 47.5993 33.4895 47.3788C37.8665 45.901 41.6699 43.0879 44.3644 39.3353C47.0589 35.5828 48.5088 31.0797 48.51 26.46C48.51 14.2774 38.6426 4.41 26.46 4.41V4.41Z"
                fill="black"/>
            </svg>
          </li>
          <li>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.3027 11.025C15.3021 12.1946 14.8369 13.3161 14.0095 14.1427C13.182 14.9693 12.0601 15.4334 10.8905 15.4328C9.72089 15.4322 8.59942 14.967 7.7728 14.1396C6.94617 13.3121 6.48211 12.1902 6.4827 11.0206C6.48328 9.85098 6.94847 8.72951 7.77592 7.90289C8.60336 7.07627 9.7253 6.61221 10.8949 6.61279C12.0645 6.61338 13.186 7.07856 14.0126 7.90601C14.8392 8.73346 15.3033 9.85539 15.3027 11.025V11.025ZM15.435 18.6984H6.615V46.305H15.435V18.6984ZM29.3706 18.6984H20.5947V46.305H29.2824V31.8181C29.2824 23.7478 39.8002 22.9981 39.8002 31.8181V46.305H48.51V28.8193C48.51 15.2145 32.9427 15.7216 29.2824 22.4028L29.3706 18.6984Z"
                fill="black"/>
            </svg>
          </li>
          <li>
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.46 19.845C24.7056 19.845 23.023 20.5419 21.7825 21.7825C20.5419 23.023 19.845 24.7056 19.845 26.46C19.845 28.2144 20.5419 29.897 21.7825 31.1375C23.023 32.3781 24.7056 33.075 26.46 33.075C28.2144 33.075 29.897 32.3781 31.1375 31.1375C32.3781 29.897 33.075 28.2144 33.075 26.46C33.075 24.7056 32.3781 23.023 31.1375 21.7825C29.897 20.5419 28.2144 19.845 26.46 19.845ZM26.46 15.435C29.384 15.435 32.1883 16.5966 34.2559 18.6642C36.3234 20.7317 37.485 23.536 37.485 26.46C37.485 29.384 36.3234 32.1883 34.2559 34.2559C32.1883 36.3234 29.384 37.485 26.46 37.485C23.536 37.485 20.7317 36.3234 18.6642 34.2559C16.5966 32.1883 15.435 29.384 15.435 26.46C15.435 23.536 16.5966 20.7317 18.6642 18.6642C20.7317 16.5966 23.536 15.435 26.46 15.435V15.435ZM40.7925 14.8838C40.7925 15.6148 40.5021 16.3158 39.9852 16.8327C39.4683 17.3496 38.7673 17.64 38.0363 17.64C37.3052 17.64 36.6042 17.3496 36.0873 16.8327C35.5704 16.3158 35.28 15.6148 35.28 14.8838C35.28 14.1528 35.5704 13.4517 36.0873 12.9348C36.6042 12.4179 37.3052 12.1275 38.0363 12.1275C38.7673 12.1275 39.4683 12.4179 39.9852 12.9348C40.5021 13.4517 40.7925 14.1528 40.7925 14.8838V14.8838ZM26.46 8.82C21.0048 8.82 20.114 8.83544 17.5761 8.94789C15.8473 9.02948 14.6875 9.261 13.6115 9.67995C12.6545 10.0504 11.9643 10.4936 11.2301 11.2301C10.5399 11.8969 10.0093 12.7109 9.67775 13.6115C9.2588 14.6919 9.02727 15.8495 8.94789 17.5761C8.83323 20.0104 8.82 20.8615 8.82 26.46C8.82 31.9152 8.83544 32.806 8.94789 35.3439C9.02948 37.0705 9.261 38.2325 9.67775 39.3063C10.0526 40.2655 10.4936 40.9557 11.2257 41.6877C11.9687 42.4286 12.6589 42.8718 13.6071 43.2378C14.6963 43.659 15.8562 43.8927 17.5761 43.9721C20.0104 44.0868 20.8615 44.1 26.46 44.1C31.9152 44.1 32.806 44.0846 35.3439 43.9721C37.0683 43.8905 38.2303 43.659 39.3063 43.2423C40.2611 42.8696 40.9557 42.4264 41.6877 41.6943C42.4308 40.9513 42.874 40.2611 43.2401 39.3129C43.659 38.2259 43.8927 37.0638 43.9721 35.3439C44.0868 32.9096 44.1 32.0585 44.1 26.46C44.1 21.0048 44.0846 20.114 43.9721 17.5761C43.8905 15.8517 43.659 14.6875 43.2401 13.6115C42.9077 12.7118 42.3781 11.8981 41.6899 11.2301C41.0234 10.5396 40.2093 10.0089 39.3085 9.67775C38.2281 9.2588 37.0683 9.02727 35.3439 8.94789C32.9096 8.83323 32.0585 8.82 26.46 8.82V8.82ZM26.46 4.41C32.451 4.41 33.1985 4.43205 35.549 4.5423C37.8973 4.65255 39.496 5.02079 40.9028 5.56763C42.3581 6.1277 43.584 6.88622 44.81 8.10999C45.9312 9.21226 46.7988 10.5456 47.3524 12.0173C47.897 13.4218 48.2675 15.0227 48.3777 17.371C48.4813 19.7215 48.51 20.469 48.51 26.46C48.51 32.451 48.488 33.1985 48.3777 35.549C48.2675 37.8973 47.897 39.496 47.3524 40.9028C46.8004 42.3752 45.9326 43.7089 44.81 44.81C43.7074 45.9309 42.3742 46.7984 40.9028 47.3524C39.4982 47.897 37.8973 48.2675 35.549 48.3777C33.1985 48.4813 32.451 48.51 26.46 48.51C20.469 48.51 19.7215 48.488 17.371 48.3777C15.0227 48.2675 13.424 47.897 12.0173 47.3524C10.545 46.8 9.21145 45.9322 8.10999 44.81C6.98854 43.7079 6.12093 42.3745 5.56763 40.9028C5.02079 39.4982 4.65255 37.8973 4.5423 35.549C4.43867 33.1985 4.41 32.451 4.41 26.46C4.41 20.469 4.43205 19.7215 4.5423 17.371C4.65255 15.0205 5.02079 13.424 5.56763 12.0173C6.1194 10.5447 6.98722 9.211 8.10999 8.10999C9.21177 6.98816 10.5453 6.12049 12.0173 5.56763C13.424 5.02079 15.0205 4.65255 17.371 4.5423C19.7215 4.43867 20.469 4.41 26.46 4.41Z"
                fill="black"/>
            </svg>
          </li>
        </ul>
      </div>
      <div className="landing__target2">
        <img className="landing__dino" src={Dino1}/>
      </div>
      </div>
    </div>
  );
}
