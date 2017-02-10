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
        newsTypeService.save(newsType);
        return "ok";
    }

    // 查询所有新闻分类
    @GetMapping(value = "/findAllType")
    @ResponseBody
    public List<NewsType> findAll() {
        return newsTypeService.findAll();
    }

    // 根据id查询新闻类别
    @GetMapping(value = "/findType/{id}")
    @ResponseBody
    public Object findById(@PathVariable("id") long id) {
        return newsTypeService.findById(id);
    }

    // 根据ID删除新闻类别
    @RequestMapping(value = "/deleteType/{id}")
    @ResponseBody
    public void deleteById(@PathVariable("id") long id) {
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
}
