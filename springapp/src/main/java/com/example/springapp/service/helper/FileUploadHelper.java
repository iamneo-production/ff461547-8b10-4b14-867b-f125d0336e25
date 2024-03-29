package com.example.springapp.service.helper;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUploadHelper {

    public final String IMAGE_UPLOAD_DIR = "src/main/resources/static/images/hotels/";

    public FileUploadHelper() throws IOException {
        super();
    }

    public boolean uploadHotelImage(MultipartFile image, String fileName) throws IOException {
        boolean status = false;

        Files.copy(image.getInputStream(), Paths.get(IMAGE_UPLOAD_DIR + File.separator + fileName),
                StandardCopyOption.REPLACE_EXISTING);
                status =true;

        return status;
    }
}
