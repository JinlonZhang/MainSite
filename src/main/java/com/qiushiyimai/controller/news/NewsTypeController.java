package com.qiushiyimai.controller.news;

import com.qiushiyimai.entity.News;
import com.qiushiyimai.entity.NewsType;
import com.qiushiyimai.service.NewsService;
import com.qiushiyimai.service.NewsTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by qsym on 2017/2/9.
 */
@Controller
@RequestMapping(value = "/news")
public class NewsTypeController {


    @Autowired
    private NewsTypeService newsTypeService;

    @Autowired
    private NewsService newsService;

    @GetMapping(value = "/index")
    public String index() {
        return "manager/index";
    }

    @GetMapping(value = "/type")
    public String type() {
        return "manager/news/type";
    }

    @GetMapping(value = "/list")
    public String list() {
        return "manager/news/list";
    }

    // 添加新闻分类
    @PostMapping(value = "/addType")
    @ResponseBody
    public Object addType(NewsType newsType) {
        return newsTypeService.save(newsType);
    }

    // 查询所有新闻分类
    @GetMapping(value = "/findAllType")
    @ResponseBody
    public List<NewsType> findAll() {
        return newsTypeService.findAll();
    }

    // 根据id查询新闻类别
    @GetMapping(value = "/findTypeById")
    @ResponseBody
    public Object findById(long id) {
        return newsTypeService.findById(id);
    }

    // 根据ID删除新闻类别
    @RequestMapping(value = "/deleteType")
    @ResponseBody
    public void deleteById(long id) {
        newsTypeService.deleteById(id);
    }

    // 编辑新闻类别
    @RequestMapping(value = "/updateType")
    @ResponseBody
    public void update(NewsType newsType) {
        newsTypeService.update(newsType);
    }

    // 添加新闻
    @PostMapping(value = "/addNews")
    @ResponseBody
    public Object addNews(News news) {
        newsService.save(news);
        return "ok";
    }

    // 查询所有新闻列表
    @GetMapping(value = "/findAllNews")
    @ResponseBody
    public List<News> findAllNews() {
        return newsService.findAll();
    }

    //根据新闻类型ID查询新闻列表
    @GetMapping(value = "/showNewsByTypeId")
    @ResponseBody
    public List<News> findByTypeId(long id) {
        return newsService.findByTypeId(id);
    }

    // 根据id查询新闻
    @GetMapping(value = "/findNewsById")
    @ResponseBody
    public Object findNewsById(long id) {
        return newsService.findById(id);
    }

    // 根据id删除新闻
    @RequestMapping(value = "/deleteNews")
    @ResponseBody
    public void deleteNewsById(long id) {
        newsService.deleteById(id);
    }

    // 更新新闻
    @RequestMapping(value = "/updateNews")
    @ResponseBody
    public void updateNews(News news) {
        newsService.update(news);
    }
}
