import "@/styles/index.scss";
import { montserrat } from "@/helpers/fonts";
import { config } from "@/helpers/config";
import { Topbar } from "@/components/common/header/Topbar";
import { MainMenuBar } from "@/components/common/header/MainMenuBar";
import { Footer } from "@/components/common/footer/Footer";

/* 
! kurulum 
*/

/*
? npm i sass@1.77.6
? npm i bootstrap react-bootstrap react-icons swiper yup primereact primeicons moment sweetalert2 next-auth
? npm i -D eslint @eslint/eslintrc eslint-config-next sass
? npm install next-auth@beta
? npx auth secret



*/
export const metadata = {
  title: {
    template: `%s | ${config.project.name}`,
    default: `${config.project.name} - ${config.project.slogan}`,
  },
  description: config.project.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} `}>
        <Topbar />
        <MainMenuBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}