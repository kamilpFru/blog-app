package blog.com.blog;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    
    @Autowired
    private PostService postService;

    @GetMapping
    public ResponseEntity<List<Post>> getPosts() {
        return new ResponseEntity<List<Post>>(postService.getAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/{postId}")
    public ResponseEntity<Optional<Post>> getPost(@PathVariable Integer postId) {
        return new ResponseEntity<Optional<Post>>(postService.getSinglePost(postId), HttpStatus.OK);
    }

    @PostMapping
    public void addNewPost(@RequestBody Post post) {
        postService.addNewPost(post);
    }

    @DeleteMapping(value = "/{postId}")
    public void deletePost(@PathVariable Integer postId) {
        postService.deletePost(postId);
    }

}
