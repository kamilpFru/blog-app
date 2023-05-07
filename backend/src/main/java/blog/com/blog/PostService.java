package blog.com.blog;

import java.util.List;
import java.util.Optional;

// import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class PostService {

    @Autowired
    private PostRepo postRepo;

    public List<Post> getAllPosts() {
        return postRepo.findAll();
    }

    public Optional<Post> getSinglePost(Integer postId) {
        return postRepo.findPostByPostId(postId);
    }

    public void addNewPost(Post post) {
        postRepo.save(post);
    }

    public void deletePost(Integer postId) {
        Post post = postRepo.deleteByPostId(postId);
        if (post == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

}
