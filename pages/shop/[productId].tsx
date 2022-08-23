// Components
import DashboardLayout from "@layouts/dashboard-layout"
// Types
import { NextPage } from "next"

const Product: NextPage = () => {
  return (
    <DashboardLayout title="Product">
      <div>Product</div>
    </DashboardLayout>
  )
}

export default Product

// TODO: specify product id or name in the title
