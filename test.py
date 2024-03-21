def remove_duplicate_lines(input_file, output_file, removed_file):
    unique_lines = set()  # Dùng set để lưu trữ các chuỗi duy nhất đã thấy
    removed_lines = []    # Dùng list để lưu trữ các dòng đã bị loại

    with open(input_file, 'r', encoding='utf-8') as file_in:
        for line in file_in:
            # Lấy chuỗi trước dấu | và chỉ kiểm tra 50 ký tự của chuỗi đó
            before_pipe = line.split('|', 1)[0].strip().lower()

            if len(before_pipe) >= 50:
                before_pipe = before_pipe[:50]
            else:
                before_pipe = line[:-2].strip().lower()

            # Nếu chuỗi đã tồn tại trong tập hợp, bỏ qua và lưu vào file removed
            if before_pipe in unique_lines:
                removed_lines.append(line)
                continue

            # Nếu không, thêm chuỗi vào tập hợp và ghi vào tập tin đầu ra
            unique_lines.add(before_pipe)

            with open(output_file, 'a', encoding='utf-8') as file_out:
                file_out.write(line)

    # Ghi các dòng đã bị loại vào file riêng
    with open(removed_file, 'w', encoding='utf-8') as file_removed:
        for line in removed_lines:
            file_removed.write(line)

if __name__ == "__main__":
    input_file = "IAP301.txt"        # Tên file đầu vào
    output_file = "IAP301_new.txt"      # Tên file đầu ra
    removed_file = "removed.txt"    # Tên file chứa các dòng đã bị loại

    remove_duplicate_lines(input_file, output_file, removed_file)

    print("Các dòng trùng lặp đã được loại bỏ thành công!")
