"use client";
import Image from "next/image";
import React, { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  type?: string;
  text: string;
  onBtnClick?: MouseEventHandler<HTMLButtonElement>;
  iconName?: ReactNode;
  imgPath?: string;
  btnStyle?: string;
  imgStyle?: string;
  loading?: boolean;
  btnType?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({
  type,
  text,
  onBtnClick,
  iconName,
  imgPath,
  btnStyle,
  imgStyle,
  loading,
  btnType,
}) => {

  return (
    <>
      {type === "outline" ? (
        <button
          className={`border-2 flex items-center semibold cursor-pointer justify-center p-2 gap-1 border-black text-black text-[13px] ${btnStyle}`}
          onClick={onBtnClick}
          type={btnType}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              {iconName ? (
                <span>{iconName}</span>
              ) : (
                <>
                  {imgPath && (
                    <Image
                      className={`${imgStyle}`}
                      width={24}
                      height={24}
                      src={imgPath}
                      alt=""
                    />
                  )}
                </>
              )}
              {text}
            </>
          )}
        </button>
      ) : (
        <button
          className={`flex items-center cursor-pointer justify-center gap-1 p-2 semibold text-center text-[13px] ${btnStyle}`}
          onClick={onBtnClick}
          type={btnType}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              {iconName ? (
                <span>{iconName}</span>
              ) : (
                <>
                  {imgPath && (
                    <Image src={imgPath} width={24} height={24} alt="" />
                  )}
                </>
              )}
              {text}
            </>
          )}
        </button>
      )}
    </>
  );
};

export default Button;

function Loader() {
  return (
    <div className="loader animate-spin p-[8px] border-t-[2px] border-[2px] border-transparent rounded-[100%] border-t-white"></div>
  );
}