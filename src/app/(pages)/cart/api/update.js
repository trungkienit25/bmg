import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const newData = req.body; // Lấy dữ liệu từ body của request

      const filePath = path.resolve(process.cwd(), 'data/cart.json'); 

      // Đọc file hiện tại
      const fileData = await fs.readFile(filePath, 'utf-8');
      const cartData = JSON.parse(fileData);

      // Cập nhật dữ liệu giỏ hàng
      cartData.items = newData.items;
      cartData.total = newData.total;

      // Ghi lại file cart.json
      await fs.writeFile(filePath, JSON.stringify(cartData, null, 2));

      return res.status(200).json({ message: "Cart updated successfully" });
    } catch (error) {
      console.error("Error updating cart:", error);
      return res.status(500).json({ message: "Error updating cart" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
