import { useEffect, useState } from "react";
import { userData } from "../models/data";
import { UserDataTypesAnotation } from "../types/type";

const NotificationsMain = () => {
  const [notifications, setNotifications] = useState<UserDataTypesAnotation[]>(
    []
  );
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    setNotifications(userData);

    let unseen = 0;
    userData.forEach((notification) => {
      if (!notification.seen) {
        unseen++;
      }
    });
    setUnread(unseen);
  }, []);

  return (
    <div
      className={`flex flex-col items-center font-plus_jakarta_sans bg-neutral-lightGrayishBlue_1 mobile:pt-[5%] mobile:pb-[100px] max-mobile:w-full ${
        notifications?.length < 5 ? "h-[100vh]" : ""
      }`}
    >
      <div className="mobile:w-[730px]  p-[2.8%] bg-neutral-white rounded-xl container">
        {/* Header */}
        <div className="w-full flex flex-row justify-between text-[16px] ">
          <span className=" text-black font-extrabold text-[25px] flex max-mobile:text-[18px]">
            Notifications{" "}
            <button className=" cursor-default rounded-md bg-primary-blue mobile:mt-2 ml-3 text-[16px]  text-white w-[35px] h-[26px] max-mobile:w-[30px] max-mobile:h-[25px]">
              {unread}
            </button>
          </span>

          <span className=" text-neutral-grayishBlue hover:text-primary-blue hover:cursor-pointer">
            Mark all as read
          </span>
        </div>

        {/* main content */}
        <div className=" flex flex-col gap-4 mt-[30px] w-full ">
          {notifications?.map((notification) => (
            <div
              key={notification.id}
              className={`w-full rounded-xl p-2  flex flex-row text-[16px] ${
                !notification.seen ? " bg-neutral-veryLightGrayishBlue" : ""
              }`}
            >
              <img
                src={`/images/avatar-${notification.name
                  .split(" ")
                  .join("-")
                  .toLocaleLowerCase()}.webp`}
                alt={`${notification.name}'s profile avatar`}
                // width={50}
                // height={50}
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="w-full flex flex-col">
                {/* notification header */}
                <div className="w-full max-mobile:ml-4 ml-10 flex flex-row pr-10">
                  <div className=" flex flex-col grow">
                    <div className="relative">
                      <span className=" mr-2 font-extrabold hover:text-primary-blue hover:cursor-pointer">
                        {notification.name}
                      </span>
                      <span className=" text-neutral-darkGrayishBlue mr-2 ">
                        {notification.case.type}
                      </span>
                      <span className=" font-extrabold text-neutral-darkGrayishBlue hover:text-primary-blue hover:cursor-pointer">
                        {notification.case.post}
                      </span>
                      <span className=" font-extrabold text-primary-blue hover:cursor-pointer">
                        {notification.case.group}
                      </span>
                      <div
                        className={`${
                          !notification.seen
                            ? "absolute right-0 bg-primary-red w-[10px] h-[10px] rounded-full "
                            : "hidden"
                        }`}
                      />
                    </div>
                    <span>{notification.dateOfAction}</span>
                  </div>
                  <div className="">
                    <img
                      src={notification.case.picture}
                      alt={`${notification.name}'s posted picture`}
                      width={50}
                      height={50}
                      className={`${
                        notification.case.picture.length > 0
                          ? " hover:border-4 hover:border-neutral-lightGrayishBlue_1 hover:cursor-pointer "
                          : "hidden"
                      }`}
                    />
                  </div>
                </div>
                {/* notifications body */}
                <div
                  className={`${
                    notification.case.message.length > 0
                      ? "text-neutral-darkGrayishBlue ml-10 border p-3 hover:cursor-pointer hover:bg-neutral-lightGrayishBlue_2 mt-3"
                      : "hidden"
                  }`}
                >
                  {notification.case.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <span className="text-[12px] mt-10 max-mobile:mb-7">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/?ref=challenge"
          className=" text-primary-blue underline"
        >
          Frontend Mentor.
        </a>{" "}
        Coded by{" "}
        <a
          href="https://portfolio.jaweki.com"
          className=" text-primary-blue underline"
        >
          Jaweki.
        </a>
      </span>
    </div>
  );
};

export default NotificationsMain;
