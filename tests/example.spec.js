// นำเข้า Playwright
const { test, expect } = require('@playwright/test');

// Test แรก: เปิด Google แล้วค้นหา
test('ค้นหาใน Google', async ({ page }) => {
  // 1. เปิดเว็บ Google
  await page.goto('https://www.google.co.th');

  // 2. หาช่องค้นหา แล้วพิมพ์
  await page.fill('textarea[name="q"]', 'Playwright');

  // 3. กด Enter เพื่อค้นหา
  await page.press('textarea[name="q"]', 'Enter');

  // 4. รอให้หน้าโหลดเสร็จ
  await page.waitForLoadState('networkidle');

  // 5. ตรวจสอบว่ามีคำว่า Playwright ในผลลัพธ์
  await expect(page).toHaveTitle(/Playwright/);
});

// Test ที่สอง: ทดสอบเว็บตัวอย่าง
test('กรอกฟอร์มและส่ง', async ({ page }) => {
  // เปิดหน้าตัวอย่างของ Playwright
  await page.goto('https://demo.playwright.dev/todomvc');

  // พิมพ์ todo ใหม่
  await page.fill('.new-todo', 'เรียน Playwright');
  await page.press('.new-todo', 'Enter');

  // ตรวจสอบว่า todo ถูกเพิ่มเข้าไป
  await expect(page.locator('.todo-list li')).toHaveText('เรียน Playwright');
});