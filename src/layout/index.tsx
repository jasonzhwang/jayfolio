import { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer/Footer";
import { useSession } from "next-auth/react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data: session } = useSession();
  const [wechatPopupVisible, setWechatPopupVisible] = useState(false);

  return (
    <section>
      {/* WeChat Popup (Rendered at the root level) */}
      {wechatPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <img
              src="./wechatprofile.png" // Replace with the actual WeChat popup image URL
              alt="WeChat Popup"
              className="w-full"
            />
            <span
              className="absolute right-2 top-2 cursor-pointer text-2xl text-gray-600"
              onClick={() => setWechatPopupVisible(false)}
            >
              ×
            </span>
          </div>
        </div>
      )}
      <Header session={session} />
      <main>{children}</main>
      <Footer
        wechatPopupVisible={wechatPopupVisible}
        setWechatPopupVisible={setWechatPopupVisible}
      />
    </section>
  );
};
export default Layout;
