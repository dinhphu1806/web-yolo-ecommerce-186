import { FaShippingFast } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";

export const policyData = [
  {
    id: 1,
    title: "Miễn phí giao hàng",
    desc: "Miễn phí ship với đơn hàng trên 279K",
    icon: <FaShippingFast />,
  },
  {
    id: 2,
    title: "Thanh toán COD",
    desc: "Thanh toán khi nhận hàng (COD)",
    icon: <FiRefreshCcw />,
  },
  {
    id: 3,
    title: "Khách hàng VIP",
    desc: "Ưu đãi dành cho khách hàng VIP",
    icon: <MdPayment />,
  },
  {
    id: 4,
    title: "Hỗ trợ bảo hành",
    desc: "Hỗ trợ tại tất cả store trên toàn tỉnh",
    icon: <BsFillCreditCardFill />,
  },
];
