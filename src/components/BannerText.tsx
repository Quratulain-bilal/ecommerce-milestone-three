import Container from "./Container";
import { motion } from "framer-motion";
import classNames from "classnames";

interface Props {
  title: string;
}

const BannerText = ({ title }: Props) => {
  const headingClasses = classNames(" text-7xl", "font-bold", "text-white");
  const paragraphClasses = classNames("text-lg", "text-slate-100");
  const buttonClasses = classNames(
    "py-3 px-6",
    "rounded-full",
    "bg-slate-200",
    "hover:bg-white",
    "duration-200",
    "text-sm",
    "uppercase",
    "font-semibold"
  );

  return (
    <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
      <Container className="flex h-full flex-col gap-y-6 justify-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={headingClasses}>{title}</h2>
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className={paragraphClasses}>
            Stock up on sportswear and limited edition collections on our <br />
            awesome mid-season sale.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          
        >
          <button className={buttonClasses}>Find out more</button>
         
        </motion.div>
      </Container>
    </div>
  );
};

export default BannerText;
