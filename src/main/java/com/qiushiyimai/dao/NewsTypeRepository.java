package com.qiushiyimai.dao;

import com.qiushiyimai.entity.NewsType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Date : 2017/2/8 0008
 * Time : 下午 1:28
 * Description :
 */
@Repository
public interface NewsTypeRepository extends JpaRepository<NewsType,Long> {

}
