package com.entity.view;

import com.entity.DiscussjingcaishipinEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 精彩视频评论表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-05-07 10:06:02
 */
@TableName("discussjingcaishipin")
public class DiscussjingcaishipinView  extends DiscussjingcaishipinEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DiscussjingcaishipinView(){
	}
 
 	public DiscussjingcaishipinView(DiscussjingcaishipinEntity discussjingcaishipinEntity){
 	try {
			BeanUtils.copyProperties(this, discussjingcaishipinEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
