module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-unused-vars': 'warn', // Cảnh báo nếu có biến không được sử dụng
    'no-console': 'warn', // Cảnh báo nếu sử dụng lệnh console.log, console.error, vv.
    'no-extra-semi': 'error', // Lỗi nếu có dấu chấm phẩy dư thừa
    'no-debugger': 'warn', // Lỗi nếu sử dụng debugger trong mã
    'no-alert': 'error', // Lỗi nếu sử dụng lệnh alert()
    'no-undef': 'error', //LỖI khai báo biến
    'react/self-closing-comp': 'error', // Lỗi nếu các thành phần không có nội dung đóng mở (self-closing)
    'react/prop-types': 'off', // Tắt kiểm tra prop-types, có thể bỏ qua nếu không sử dụng prop-types

    '@next/next/no-img-element': 'off', //Check image next
    '@next/next/link-passhref': 'off', // tắt passhref
    '@typescript-eslint/ban-ts-ignore': 'off', //Tắt check ts
    '@typescript-eslint/no-misused-promises': 'off', //Tắt check useEffet
    // Quy tắc liên quan đến Prettier:
    'prettier/prettier': [
      'error',
      {
        printWidth: 140,
        endOfLine: 'auto',
      },
    ], // Hiển thị lỗi khi không tuân thủ các quy tắc Prettier
    'no-use-before-define': 'error',
    'react-native/no-inline-styles': 'off',
  },
};
