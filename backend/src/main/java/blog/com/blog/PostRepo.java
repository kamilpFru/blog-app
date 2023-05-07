package blog.com.blog;

import java.util.Optional;

// import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepo extends MongoRepository<Post, Integer> {
    Optional<Post> findPostByPostId(Integer postId);
    Post deleteByPostId(Integer postId);
}
