package blog.com.blog;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "posts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    @Id
    private ObjectId id;
    
    @Indexed(unique = true)
    private Integer postId;
    private String title;
    private String categorie;
    private String author;
    private String desc;
    private String img;
}
